const http = require('http');

const courses = [
    {
        name: 'HTML',
    },
    {
        name: 'CSS',
    },
    {
        name: 'JS',
    },
];
const server = http.createServer((req, res) => {
    const url = req.url; // what?
    const method = req.method; // how?, action?
    if (url === '/courses') {
        if (method === 'GET') {
            res.writeHead(200, {
                'Content-Type': 'application/json',
            });
            res.end(JSON.stringify(courses));
        } else if (method === 'POST') {
            // 클라이언트로부터 데이터를 받아야 함
            const body = [];
            req.on('data', (chunk) => {
                // chunk <-> buffer
                console.log(chunk);
                body.push(chunk);
            });

            req.on('end', () => {
                const course = JSON.parse(Buffer.concat(body).toString());
                courses.push(course);
                console.log(course);
                res.writeHead(201);
                res.end();
            });
        }
    }
});

server.listen(8080); // port

console.log(' ');
