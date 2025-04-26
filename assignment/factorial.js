var calcFactorial = function (num) {
    var factorial = 1;
    for (var i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
};
var num = 5;
console.log("Factorial of number ".concat(num, " is ").concat(calcFactorial(num)));
