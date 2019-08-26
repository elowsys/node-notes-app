const chalk = require('chalk');
const assert = require('assert');
const mongoClient = require('./node_modules/mongodb').MongoClient;

const url = 'mongodb+srv://cdent-usr:R4j35hSad2019@chatham-dentists-3aqdy.mongodb.net/test?retryWrites=true&w=majority';
const mongoDb = 'chatham-dentists-web';

const error = chalk.bold.bgWhite.red.inverse;
const info = chalk.bold.bgBlack.cyan.inverse;
const secondary = chalk.bold.bgWhite.black.inverse;
const success = chalk.bold.bgBlack.green.inverse;
const warning = chalk.bold.bgBlue.yellow.inverse;

const client = new mongoClient(url, {
    useNewUrlParser: true
});


function readData(payload) {
    logAction('Opening connection...', 'info');
    console.log(client);
    client.connect(function (err, cli) {
        debugger;
        assert.equal(null, err);
        logAction('Successfully connected...', 'success');
        const db = cli.db(mongoDb);
        console.log(db);
        db.listCollections().toArray(function (err, collInfo) {
            console.log(collInfo);
        });
        cli.close();
        logAction('Closed connection.', 'info');
        return 'read ' + payload + ' from the database';
    });
}

function writeData(payload) {
    logAction('Opening connection...', 'info');
    client.connect(function (err, client) {
        assert.equal(null, err);
        logAction('Successfully connected...', 'success');
        return 'wrote ' + payload + ' to the database';
    });
    client.close();
    logAction('Closed connection.', 'info');
}

function logAction(msg, skin) {
    switch (skin) {
        case 'info':
            info(msg);
            break;
        case 'secondary':
            secondary(msg);
            break;
        case 'success':
            success(msg);
            break;
        case 'warning':
            warning(msg);
            break;
        default:
            error(msg);
            break;
    }
}

module.exports = {
    //client: client,
    readData: readData,
    writeData: writeData
};
