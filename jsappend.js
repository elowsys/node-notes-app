console.log('jsappend.js');

const fs = require('fs')

//fs.appendFileSync('test.txt', '. Additional text added to the file!!!')

appendContent = (fileName, content) => {
    fs.appendFileSync(fileName, content)
}

module.exports = appendContent
