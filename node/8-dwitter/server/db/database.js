import { config } from '../config.js';
import mysql from 'mysql2';

const pool = mysql.createPool({
    // connection options
    host: config.db.host,
    user: config.db.user,
    databae: config.db.databae,
    password: config.db.password,
});

export const db = pool.promise();
