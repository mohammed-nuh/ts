let sales: number[] = [10000, 5000, 7000];
let sum:number = 0;

for (let sale of sales) {
    sum += sale;
}

console.log(`Total sales: ${sum}`);
