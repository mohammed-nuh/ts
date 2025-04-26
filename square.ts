function square(n: number): number{
    let sq: number = n * n;
    return sq;
}

let n: number = 5;
let sq_n = square(n);
console.log(`square of ${n} is ${sq_n}`);
