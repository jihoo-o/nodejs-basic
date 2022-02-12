import express from 'express';
import 'express-async-error';
import cors from 'cors';
import moargan from 'helmet';
import helmet from 'helmet';
import tweetsRouter from './router/tweet.js';

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors()); // option
app.use(moargan('tiny'));

app.use('/tweets', tweetsRouter);

app.use((req, res, next) => {
    res.sendStatus(404);
});

app.use((error, req, res, next) => {
    console.error(error);
    res.sendStatus(500);
});
app.listen(8080);
