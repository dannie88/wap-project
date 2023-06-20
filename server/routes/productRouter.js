const express = require('express');
const productController = require('../controllers/productController');
const userController = require('../controllers/userController');
const authController = require('../controllers/auth.controller');
const router = express.Router();

router.route('/users/login').post(userController.login);

router.route('/products').get(authController.authenticate, productController.fetchAll);

router.route('/products/:productId').get(authController.authenticate, productController.findById);

router.route('/products/place-order').post(authController.authenticate, productController.placeOrder);

module.exports = router;