const chalk = require('chalk');
const fs = require('fs');

const error = chalk.bold.bgWhite.red.inverse;
const info = chalk.bold.bgBlack.cyan.inverse;
const secondary = chalk.bold.bgWhite.black.inverse;
const success = chalk.bold.bgBlack.green.inverse;
const warning = chalk.bold.bgBlack.yellow.inverse;

console.log(info('In noteUtils.js'));

// const exists = (notes, title) => notes.filter(note => note.title === title).length > 0;
const exists = (notes, title) => notes.find(note => note.title === title) != undefined;
const item = (notes, title) => notes.find(note => note.title === title);

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    } catch (e) {
        console.log(warning('File not found - ', e));
        return [];
    }
};

const saveNotes = notes => {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
};

addNote = (title, body) => {
    const notes = loadNotes();
    //console.log('isDuplicate: ', exists(notes, title));
    //dont add if duplicate title detected
    // if (notes.filter((note) => note.title === title).length === 0) {

    //debugger;

    if (!exists(notes, title)) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(secondary('Title:', title, '\nBody: ', body));
        console.log(notes);
    } else {
        console.log(error('Note not added duplicate detected - ', title));
    }
};

delNote = title => {
    const notes = loadNotes();
    //delete if title found in array
    //console.log('item: ', item(notes, title));
    if (notes.findIndex((note) => note.title === title) !== -1) {
        notes.splice(notes.findIndex((note) => note.title === title), 1);
        saveNotes(notes);
        console.log(notes);
        console.log(info('Successfully deleted note  ', title));
    } else {
        console.log(warning('Note not found ', title));
    }
};

readNote = (title) => {
    const notes = loadNotes();
    //delete if title found in array
    if (notes.findIndex((note) => note.title === title) !== -1) {
        const note = notes.find((note) => note.title === title);
        console.log(note);
    } else {
        console.log(warning('Note not found ', title));
    }
};

listNotes = () => {
    console.log(warning('Listing all notes...'));
    const notes = loadNotes();
    console.log(notes);
    notes.forEach(note => {
        console.log(info('Title:', note.title));
    });
};


module.exports = {
    addNote: addNote,
    delNote: delNote,
    readNote: readNote,
    listNotes: listNotes
};
