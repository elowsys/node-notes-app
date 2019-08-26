const chalk = require('chalk');
const yargs = require('yargs');

const validator = require('./node_modules/validator/validator');
const noteUtils = require('./noteUtils');

const commands = process.argv;

const mongocli = require('./mongodb');
// const mongoClient = require('./node_modules/mongodb').MongoClient;
// const assert = require('assert');

// const success = chalk.bold.bgBlack.green.inverse;
// const warning = chalk.bold.bgBlue.yellow.inverse;
// const error = chalk.bold.bgWhite.red.inverse;

// const mongoUrl = 'mongodb+srv://cdent-usr:R4j35hSad2019@chatham-dentists-3aqdy.mongodb.net/test?retryWrites=true&w=majority&useNewUrlParser=true';
// const mongoDb = 'chatham-dentists-web';

// // const email = 'Wolexie@FOO.Bar'
// // console.log(validator.isEmail(email))
// // //email =
// // console.log(chalk.green('Success!'))
// // console.log(chalk.bold.bgYellow.red('Success!'))
// // console.log(chalk.bold.bgYellow.inverse.red('Success!'))
// // console.log(chalk.bold.bgRed.blue('Success!'))
// // console.log(chalk.bold.bgRed.inverse.blue('Success!'))

console.log('Starting...');

// console.log(mongoClient.connect(mongoUrl, function (err, client) {
//     assert.equal(null, err);
//     console.log(chalk.bold.bgBlue.green('Successfully connected to mongodb host'));
//     console.log(client.db(mongoDb));
//     client.close();
//     console.log(chalk.bold.bgWhite.red('Closed connection to mongodb host'));
// }));
//mongocli.ReadData('This is a test to mongodb');

//console.log(commands);

//change version number
// yargs.version('1.3.4');

// add, delete, read, list

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        noteUtils.addNote(argv.title, argv.body);
    }
});

// Create delete command
yargs.command({
    command: 'del',
    describe: 'Delete a note',
    builder: {
        title: {
            describe: 'Title of note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        noteUtils.delNote(argv.title);
    }
});

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Title of note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        noteUtils.readNote(argv.title);
    }
});

yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler() {
        noteUtils.listNotes();
    }
})

//console.log(yargs.argv);
//console.log(getNotes(command[3]));

// if (commands && commands[2] === 'add') {
//     console.log(success('Adding note...'));
// } else if (commands && commands[2] === 'del') {
//     console.log(warning('Removing note...'));
// } else {
//     console.log(error('Unsupported switch: ' + commands));
// }

//yargs.parse();

mongocli.readData('Connecting to mongodb is awesome');

console.log('Ended...');
