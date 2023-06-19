const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();



router.get('/', productController.fetchAll);

router.get('/:productId', productController.findById);

router.post('/place-order', productController.placeOrder);

module.exports = router;