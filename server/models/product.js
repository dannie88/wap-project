let products = [];
 module.exports = class product{
    constructor(id,name,price,stock,image){
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.image = image;
    }


    findOne = function(productId){
        return products.find(p=> p.id == productId);
    };
    
    findAll = function(){
        return products;
    }
    
    updateStocks = function(orderItems){
        orderItems.forEach((item)=>{
            const productIndex = products.findIndex(p=> p.id == item.id);
            products[productIndex].stock = item.quantity;
        });
    }


 }