import mysql from 'mysql2';
import dotenv from 'dotenv';
import { Sequelize, DataTypes } from 'sequelize';
dotenv.config();

export const sequelizeConnection = new Sequelize({
    dialect: 'mysql',
    database: process.env.MySQL_DATABASE,
    username: process.env.MySQL_USER,
    password: process.env.MySQL_PASSWORD,
    host: process.env.MySQL_HOST,
    port: process.env.MySQL_PORT || 3306,
});
 