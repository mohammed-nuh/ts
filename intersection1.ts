interface A {
    a: string;
}

interface B {
    b: number;
}

let obj: A & B = {
    a: "Hi",
    b: 25,
}

console.log(obj);
