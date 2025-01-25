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


/**
 * The user object has the following Properties
 * @property {INTEGER} id : userId Authinc
 * @property {STRING} name: UserName not NUll,
 * @property {STRING} email: UserEmail not null.
 */
export const user = sequelizeConnection.define('User',{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    }
},
{
    tableName: 'Users',
    freezeTableName: true,
    timestamps: false
}
)
 