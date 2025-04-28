function greet(name, greeting) {
    if (greeting) {
        console.log("".concat(greeting, " ").concat(name));
    }
    else {
        console.log("Hello ".concat(name));
    }
}
greet("Nuh");
greet("Nuh", "Assalamualaikum");
