// 모듈 내의 프로미스들을 가져옴
const fs = require('fs').promises;

// reading a file -> buffer
// => buffer
fs.readFile('./text.txt').then(console.log).catch(console.error);

// => encoded
fs.readFile('./text.txt', 'utf-8').then(console.log).catch(console.error);

// writing a file
fs.writeFile('./file.txt', 'Good afternoon').catch(console.error);
fs.appendFile('./file.txt', ' and Good evening soon')
    .then(() => {
        // copy
        fs.copyFile('./file.txt', './file2.txt').catch(console.error);
    })
    .catch(console.error);

// foler
fs.mkdir('sub-folder').catch(console.error);

// reading folder
fs.readdir('./').then(console.log).catch(console.error);
