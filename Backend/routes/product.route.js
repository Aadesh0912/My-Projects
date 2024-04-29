// C:\Users\ABC\OneDrive\Desktop\project2\Backend\routes\product.route.js
const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');
const Product = require('../models/product.model');

// Create a new product
router.post('/create', async (req, res) => {
    try {
        const { ProductName, Price, Category, ImageURL, ProductLink, Discount } = req.body;
        const newProduct = await Product.create({
            ProductName,
            Price,
            Category,  
            ImageURL,
            ProductLink,
            Discount
        });
        res.json(newProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
// Get all products
// Get all products
router.get('/getAll', async (req, res) => {
    try {
        const products = await Product.findAll({
            attributes: ['ProductID', 'ProductName', 'Price', 'Category',  'ImageURL', 'ProductLink', 'Discount']
        });
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Search products by any word
router.get('/search', async (req, res) => {
    try {
        const searchQuery = req.query.q;
        console.log('Search request received:', req.query.q);
        if (!searchQuery) {
            return res.status(400).json({ error: 'Search query is required' });
        }

        // Use Sequelize's Op.iLike to perform a case-insensitive search


// After
const products = await Product.findAll({
    where: {
        [Op.or]: [
            { ProductName: { [Op.like]: `%${searchQuery}%` } },
            { Category: { [Op.like]: `%${searchQuery}%` } },
        ]
    },
    attributes: ['ProductID', 'ProductName', 'Price', 'Category', 'ImageURL', 'ProductLink', 'Discount']
});

        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// Get product by ID
router.get('/get/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await Product.findByPk(productId);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Update product by ID
router.put('/update/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const { ProductName, Price, Category,  ImageURL, ProductLink, Discount } = req.body;
        const updatedProduct = await Product.update({
            ProductName,
            Price,
            Category,
 
            ImageURL,
            ProductLink,
             Discount
        }, {
            where: { ProductID: productId },
        });
        res.json(updatedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Delete product by ID
router.delete('/delete/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        await Product.destroy({ where: { ProductID: productId } });
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get products by category (sorted)
router.get('/getByCategory/:category', async (req, res) => {
    try {
        const category = req.params.category;
        const products = await Product.findAll({ where: { Category: category }, order: [['Price', 'ASC']] });
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



module.exports = router;
