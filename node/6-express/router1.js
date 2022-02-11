import express from 'express';

const app = express();

app.use(express.json());

// 💩 URL이 많아지는 경우 가독성이 떨어지고 유지보수도 어려움

app.route('/posts')
    .get((req, res) => {
        res.status(201).send('GET: /posts');
    })
    .post((req, res) => {
        res.status(201).send('POST: /posts');
    });

app.route('/posts/:id')
    .put((req, res) => {
        res.status(201).send('PUT: /posts/:id');
    })
    .delete((req, res) => {
        res.status(201).send('DELETE: /posts/:id');
    });

app.listen(8080);
