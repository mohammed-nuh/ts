var sales = [10000, 5000, 7000];
var sum = 0;
for (var _i = 0, sales_1 = sales; _i < sales_1.length; _i++) {
    var sale = sales_1[_i];
    sum += sale;
}
console.log("Total sales: ".concat(sum));
