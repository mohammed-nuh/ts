var discountedPrice = function (price, discountPercent) { return discountPercent ? price - price * (discountPercent / 100) : price; };
console.log(discountedPrice(8000, 20));
console.log(discountedPrice(8000));
