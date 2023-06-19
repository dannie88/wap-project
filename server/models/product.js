
let products = [
    { id: 1, name: 'Node', price: 12.00, stock: 20, image: 'node.png' },
    { id: 2, name: 'React', price: 32.00, stock: 15, image: 'react.png' },
    { id: 3, name: 'Angular', price: 25.00, stock: 10, image: 'angular.png' }
];



module.exports = class product {

    constructor(id, name, price, stock, image) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.image = image;
    }


    static findById = function (productId) {
        return products.find(p => p.id == productId);
    };

    static fetchAll = function () {
        return products;
    }

     static updateStocks = function (orderItems) {
        orderItems.forEach(item => {
            const productIndex = products.findIndex(p => p.id == item.id);
            products[productIndex].stock -= item.quantity;
            console.log(item.id ,item.stock,item.quantity);
        });
    }


}