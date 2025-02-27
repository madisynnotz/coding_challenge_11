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

// Task 2: Creating a Borrower Class
class Borrower {
    // Constructor initializes borrower properties
    constructor(name, borrowerId) {
        this.name = name;                 
        this.borrowerId = borrowerId;     
        this.borrowedBooks = [];         
    }
    // Method to add a book title to the borrowed books list
    borrowBook(book) {
        this.borrowedBooks.push(book);
    }

    // Method to remove a book title from the borrowed books list
    returnBook(book) {
        this.borrowedBooks = this.borrowedBooks.filter(title => title !== book);
    }
}

// Task 3: Creating a Library Class
class Library {
    constructor() {
        this.books = [];      // Array to store books in the library
        this.borrowers = [];  // Array to store borrowers
    }

    // Method to add a book to the library
    addBook(book) {
        this.books.push(book);
    }

    // Method to list all books in the library
    listBooks() {
        this.books.forEach(book => console.log(book.getDetails()));
    }

    // Method to add a borrower to the library system
    addBorrower(borrower) {
        this.borrowers.push(borrower);
    }

    // Method to find a book by its ISBN
    findBook(isbn) {
        return this.books.find(book => book.isbn === isbn);
    }

    // Method to find a borrower by their ID
    findBorrower(borrowerId) {
        return this.borrowers.find(borrower => borrower.borrowerId === borrowerId);
    }
}