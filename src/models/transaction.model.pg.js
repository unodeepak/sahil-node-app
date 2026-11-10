const { DataTypes } = require("sequelize");

const { sequelize } = require("../config/sequelize");

const Transaction = sequelize.define(
    'transaction',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        amount: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        isSuccess: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }
);

module.exports = Transaction;