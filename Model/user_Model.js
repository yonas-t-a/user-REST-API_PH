import { sequelizeConnection } from "../config/db-config.js";
import { DataTypes } from "sequelize";
/**
 * The user object has the following Properties
 * @id : int
 * @name : string
 * @email : string
 */
const user = sequelizeConnection.define('User',{
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