// database.js
const { Sequelize } = require('sequelize');

const seq = new Sequelize("my_project", "root", "Utkarsh@789", {
    host: '127.0.0.1',
    port: 3306,
    dialect: "mysql",
});

module.exports = { seq };

