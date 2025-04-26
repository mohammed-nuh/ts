class Book {
    author: string;
    title: string;
    pages: number;

    constructor(a: string, t: string, p:number){
        this.author = a;
        this.title = t;
        this.pages = p;
    }

    bookDetails(): string {
        return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`;
    }
}

let book1: Book = new Book("James Clear", "Atomic Habits", 200);
let bookDetails: string = book1.bookDetails();
console.log(bookDetails);
