var Book = /** @class */ (function () {
    // author: string;
    // title: string;
    // pages: number;
    function Book(a, t, p) {
        this.author = a;
        this.title = t;
        this.pages = p;
    }
    Book.prototype.bookDetails = function () {
        return "Title: ".concat(this.title, ", Author: ").concat(this.author, ", Pages: ").concat(this.pages);
    };
    return Book;
}());
var book1 = new Book("James Clear", "Atomic Habits", 200);
var bookDetails = book1.bookDetails();
console.log(bookDetails);
