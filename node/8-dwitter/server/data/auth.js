import SQ from 'sequelize';
import { sequelize } from '../db/database.js';

// MODEL
const DataTypes = SQ.DataTypes;
export const User = sequelize.define(
    'user',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(128),
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(128),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(128),
            allowNull: false,
        },
        url: DataTypes.TEXT,
    },
    { timestamps: false }
);

export async function findByUsername(username) {
    return User.findOne({ where: { username } }) //
        .then((data) => data.dataValues);
}

export async function findById(id) {
    console.log(id);
    return User.findByPk(id) //
        .then((data) => data.dataValues);
}

export async function createUser(user) {
    return User.create(user) //
        .then((data) => data.dataValues.id);
}
