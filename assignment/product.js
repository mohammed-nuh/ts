var Product = /** @class */ (function () {
    function Product(title, description, price, quantity) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
    }
    Product.prototype.printDetails = function () {
        console.log("Info of ".concat(this.title));
        console.log("Title => ".concat(this.title));
        console.log("Description => ".concat(this.description));
        console.log("Price => ".concat(this.price));
        console.log("Quantity => ".concat(this.quantity));
    };
    return Product;
}());
var product1 = new Product('Iphone', 'Made by apple', 80000, 4);
product1.printDetails();
