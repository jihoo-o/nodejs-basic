import express from 'express';
const app = express();

// app.all 🆚 app.use
app.all('/api', (req, res, next) => {
    console.log('all');
    next();
});

app.use('/sky', (req, res, next) => {
    console.log('use');
    next();
});

app.get(
    '/',
    (req, res, next) => {
        console.log('first');
        // res.send('hihihi');
        next('route');
    },
    (req, res, next) => {
        console.log('second');
        next();
    }
);

app.get('/', (req, res, next) => {
    console.log('third');
    // next(new Error('error occured!'));
    next();
});

// 유효하지 않은 URL
app.use((req, res, next) => {
    res.status(404).send('Not Available!');
});

// 마지막 미들웨어에서 에러처리
app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).send('Sorry, try later!');
});

app.listen(8080);
