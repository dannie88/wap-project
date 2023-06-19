const express = require('express');
const productController = require('../controllers/productController');
const userController = require('../controllers/usercontroller');
const authController = require('../controllers/auth.controller');
const router = express.Router();

router.post('/users/login',userController.login);

router.get('/',authController.authenticate, productController.fetchAll);

router.get('/:productId',authController.authenticate, productController.findById);

router.post('/place-order',authController.authenticate, productController.placeOrder);

module.exports = router;