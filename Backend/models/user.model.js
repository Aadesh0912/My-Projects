// C:\Users\ABC\OneDrive\Desktop\project2\Backend\models\user.model.js
const { DataTypes } = require('sequelize');
const { seq } = require('../database');

const User = seq.define('User', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    contact_number: {
        type: DataTypes.STRING(15),
        allowNull: true,
    },
    email_id: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    role: {
        type: DataTypes.ENUM('user'),
        allowNull: true,
        defaultValue: 'user',
    },
}, { timestamps: false });


module.exports = User;
