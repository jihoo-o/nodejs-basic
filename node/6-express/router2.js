import express from 'express';
import postRouter from './router/post.js';
import userRouter from './router/user.js';

const app = express(); //

const options = {
    dotfiles: 'ignore',
    etag: false,
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
        res.set('x-timestamp', Date.now());
    },
};

app.use(express.json()); // REST API -> Body
app.use(express.urlencoded({ extended: false })); // HTML Form -> Body
app.use(express.static('public', options)); // 리소스 접근 허용

// ✨
app.use('/posts', postRouter);
app.use('/users', userRouter);

app.listen(8080);
