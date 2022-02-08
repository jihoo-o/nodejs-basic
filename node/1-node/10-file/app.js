const fs = require('fs');

// synchronous
try {
    fs.renameSync('./text.txt', './file.txt');
} catch (e) {
    console.error(e);
}

fs.rename('./file.txt', './text.txt', (error) => {
    console.log(error);
});

fs.promises
    .rename('./text2.txt', './file.txt')
    .then(() => console.log('done'))
    .catch(console.error);

console.log('hello');
