// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRouter = require('./routes/auth.route');
const productRouter = require('./routes/product.route'); // Import the product router

const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(cors());

// Mount the authentication routes
server.use('/auth', authRouter);

// Mount the product routes
server.use('/products', productRouter);

server.listen(3001, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Server is running on port 3001');
  }
});
