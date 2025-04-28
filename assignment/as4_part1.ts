interface Product {
    id: number
    name: string
    price: number
    description?: string
}

let product1 = {id: 101, name: "Iphone", price: 80000, description: "made by apple"};
let product2 = {id: 102, name: "IQOO Z9X", price: 13500};
printProductDetails(product1);
printProductDetails(product2);

function printProductDetails(product: Product){
    console.log(`Details of ${product.name}`);
    console.log(`id => ${product.id}`);
    console.log(`name => ${product.name}`);
    console.log(`price => ${product.price}`);

    if(product.description){
        console.log(`description => ${product.description}`);
    }
    console.log();
}