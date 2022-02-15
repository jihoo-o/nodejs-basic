import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import {} from 'express-async-error';
import * as userRepository from '../data/auth.js';

// TODO: Make it secure
const jwtSecretKey =
    '5A2C7BF749A5C6BBFEE86370DB9D8F6BD108191D8DF4FA75DF82190E87230F5E';
const jwtExpiresInDays = '2d';
const bcryptSaltRounds = 12;

export async function signup(req, res) {
    const { username, password, name, email, url } = req.body;
    const found = await userRepository.findByUsername(username);
    if (found) {
        return res.status(409).json({ message: `${username} already exists` });
    }
    const hashed = await bcrypt.hash(password, bcryptSaltRounds);
    // 서버내의 고유한 사용자 Id
    const userId = await userRepository.createUser({
        username,
        password: hashed,
        name,
        email,
        url,
    });
    const token = createJwtToken(userId);
    res.status(201).json({ token, username });
}

export async function login(req, res) {
    const { username, password } = req.body;
    const user = await userRepository.findByUsername(username);
    if (!user) {
        return res
            .status(401)
            .json({ message: 'Invalid username or password' });
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
        return res
            .status(401)
            .json({ message: 'Invalid password or password' });
    }
    const token = createJwtToken(user.id);
    res.status(200).json({ token, username });
}

function createJwtToken(id) {
    return jwt.sign({ id }, jwtSecretKey, { expiresIn: jwtExpiresInDays });
}
