const productModel = require('../models/product');

exports.fetchAll = (req, res) => {
    res.status(200).json({ message: 'Retrived successfully', data: productModel.fetchAll() });
}

exports.findById = (req, res) => {
    const productId = parseInt(req.params.productId);
    const product = productModel.findById(productId);
    if (!product) {
        res.status(404).json({ message: 'Product not found' });
    } else {
        res.status(200).json({ message: 'Retrived successfully', data: product });
    }
}

exports.placeOrder = (req, res) => {
    const orderItems = req.body;
    productModel.updateStocks(orderItems);

    res.status(200).json({ message: 'Order placed successfully' });
}
