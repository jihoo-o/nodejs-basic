import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';

const app = express();

const corsOption = {
    origin: ['http://127.0.0.1:5500'],
    optionsSuccessStatus: 200,
    credentials: true, // <-> Access-Control-Allow-Credentials: true
};

// external middlewares
app.use(cookieParser());
app.use(morgan('combined')); // format
app.use(helmet());
app.use(cors(corsOption));

app.get('/', (req, res) => {
    console.log(req.cookies);
    res.send('Welcome!');
});

app.listen(8080);
