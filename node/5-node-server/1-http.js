const http = require('http');
const fs = require('fs');

// console.log(http.STATUS_CODES);
// console.log(http.METHODS);

const server = http.createServer((req, res) => {
    const url = req.url;
    res.setHeader('Content-Type', 'text/html');
    if (url === '/') {
        fs.createReadStream('./html/index.html').pipe(res);
    } else if (url === '/courses') {
        fs.createReadStream('./html/courses.html').pipe(res);
    } else {
        fs.createReadStream('./html/not-found.html').pipe(res);
    }
    // res.end();
});

server.listen(8080); // port

console.log(' ');
