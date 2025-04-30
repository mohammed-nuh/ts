var discountedPrice = function (price, discPerc) { return discPerc ? price - price * (discPerc / 100) : price; };
console.log(discountedPrice(8000, 20));
console.log(discountedPrice(8000));
