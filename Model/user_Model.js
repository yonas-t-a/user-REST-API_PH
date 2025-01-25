import { sequelizeConnection } from "../config/db-config.js";
import { DataTypes } from "sequelize";
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