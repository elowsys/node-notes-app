console.log('jsoverwrite.js');

const fs = require('fs')

fs.writeFileSync('test.txt', 'This is an overwrite of the original file in node js')

overwriteContent = (fileName, content) => {
    fs.writeFileSync(fileName, content)
}

module.exports = overwriteContent
