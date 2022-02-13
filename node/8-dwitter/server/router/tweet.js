import express from 'express';
import 'express-async-error';

let tweets = [
    {
        id: '1',
        text: 'good morning',
        createAdd: Date.now().toString(),
        name: 'Bob',
        username: 'bob',
        url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
    },
    {
        id: '2',
        text: 'Im gonna take a walk',
        createAdd: Date.now().toString(),
        name: 'Lose',
        username: 'Lose',
        url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
    },
];
const router = express.Router();

// GET /tweets
// GET /tweets?username=:username
router.get('/', (req, res, next) => {
    // <-> /tweeets
    const username = req.query.username;
    const data = username
        ? tweets.filter((t) => t.username === username)
        : tweets;
    res.status(200).json(data);
});

// GET /tweets/:id
router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    const tweet = tweets.find((t) => t.id === id);
    if (tweet) {
        res.status(200).json(tweet);
    } else {
        res.status(404).json({ message: `Tweet id: ${id} not found` });
    }
});

// POST /tweets
router.post('/', (req, res, next) => {
    const { text, name, username } = req.body;
    const tweet = {
        id: Date.now().toString(),
        text,
        createdAt: Date.now().toString(),
        name,
        username,
    };
    tweets.unshift(tweet);
    res.status(201).json(tweet);
});

// PUT /tweets/:id
router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    const { text } = req.body;
    const tweet = tweets.find((t) => t.id === id);
    if (tweet) {
        tweet.text = text;
        res.status(200).json(tweet);
    } else {
        res.status(404).json({ message: `Tweet id: ${id} not found` });
    }
});

// DELETE /tweets/:id
router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    tweets = tweets.filter((t) => t.id !== id);
    res.sendStatus(204);
});

export default router;
