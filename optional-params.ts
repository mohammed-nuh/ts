function greet(name:string, greeting?:string) {
    if(greeting){
        console.log(`${greeting} ${name}`);
    } else {
        console.log(`Hello ${name}`);
    }
}

greet("Nuh");
greet("Nuh","Assalamualaikum");
