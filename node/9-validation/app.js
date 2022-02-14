import express from 'express';
import { body, validationResult } from 'express-validator';

const app = express();
app.use(express.json());

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    } else {
        return res.status(400).json({ message: errors.array() });
    }
};

/**
 * body
    {
        "name": "S1",
        "age": 1,
        "job": {
            "name": "DC Academy",
            "title": "Student"
        },
        "email": "seonhwa@server.com"
    }
 */

app.post(
    '/users',
    [
        body('name')
            .notEmpty()
            .withMessage('이름을 입력해주세요')
            .isLength({ min: 2 })
            .withMessage('이름은 두 글자 이상이어야 합니다'),
        body('age').notEmpty().isInt().withMessage('나이는 숫자여야 합니다'),
        body('email').isEmail().withMessage('이메일 형식에 어긋납니다'),
        body('job.name').notEmpty(),
        validate,
    ],
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ message: errors.array() });
        }
        console.log(req.body);
        res.sendStatus(201);
    }
);

app.get('/:email', [param('email').notEmpty(), validate], (req, res, next) => {
    res.send('💌');
});

app.listen(8080);
