console.log('jscreate.js');

const fs = require('fs')

//fs.writeFileSync('test.txt', 'This is my first node generated file...')

createContent = (fileName, content) => {
    fs.writeFileSync(fileName, content)
}

module.exports = createContent
