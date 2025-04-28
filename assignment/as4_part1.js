var product1 = { id: 101, name: "Iphone", price: 80000, description: "made by apple" };
var product2 = { id: 102, name: "IQOO Z9X", price: 13500 };
printProductDetails(product1);
printProductDetails(product2);
function printProductDetails(product) {
    console.log("Details of ".concat(product.name));
    console.log("id => ".concat(product.id));
    console.log("name => ".concat(product.name));
    console.log("price => ".concat(product.price));
    if (product.description) {
        console.log("description => ".concat(product.description));
    }
    console.log();
}
