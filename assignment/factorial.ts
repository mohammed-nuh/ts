let calcFactorial = num => {
    let factorial: number = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}

let num: number = 5;
console.log(`Factorial of number ${num} is ${calcFactorial(num)}`);
