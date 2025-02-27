// Task 1: Creating a Book Class
class Book {  // Constructor initializes book properties
    constructor(title, author, isbn, copies) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    }
 // Method to return book details as a formatted string
    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`;
    }
 // Method to update the number of copies (borrow or return)
    updateCopies(quantity) {
        this.copies += quantity;
    }
}
