// C:\Users\ABC\OneDrive\Desktop\project2\Backend\models\product.model.js
const { DataTypes } = require('sequelize');
const { seq } = require('../database');

const Product = seq.define('Products', {
    ProductID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    ProductName: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    Price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    Category: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
   
    ImageURL: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    Discount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
        defaultValue: 0.00,
    },
    ProductLink: {
        type: DataTypes.STRING(500),
        allowNull: false,
    }

}, { timestamps: false });

module.exports = Product;
