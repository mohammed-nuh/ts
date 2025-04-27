class Product {
    title: string;
    description: string;
    price: number;
    quantity: number;

    constructor(title: string, description: string, price: number, quantity: number){
        this.title = title;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
    }

    printDetails(): void {
        console.log(`Info of ${this.title}`);
        console.log(`Title => ${this.title}`);
        console.log(`Description => ${this.description}`);
        console.log(`Price => ${this.price}`);
        console.log(`Quantity => ${this.quantity}`);
    }
}

let product1: Product = new Product('Iphone', 'Made by apple', 80000, 4);
product1.printDetails();