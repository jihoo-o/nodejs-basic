import express from 'express';
import cors from 'cors';

const app = express();

// 1
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
//     res.setHeader(
//         'Access-Control-Allow-Methods',
//         'OPTIONS, GET, POST, PUT, DELETE'
//     );
//     next();
// });

// 2 cors middleware
app.use(
    cors({
        origin: ['http://127.0.0.1:5500'],
        optionsSuccessStatus: 200,
        credentials: true, // <-> Access-Control-Allow-Credentials: true
    })
);

app.get('/', (req, res) => {
    res.send('Welcome!');
});

app.listen(8080);