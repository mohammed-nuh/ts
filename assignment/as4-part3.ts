let discountedPrice = (price: number, discountPercent?: number) => discountPercent ? price - price * (discountPercent/100) : price;


console.log(discountedPrice(8000, 20));
console.log(discountedPrice(8000));
