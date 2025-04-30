let discountedPrice = (price: number, discPerc?: number) => discPerc ? price - price * (discPerc/100) : price;

console.log(discountedPrice(8000, 20));
console.log(discountedPrice(8000));
