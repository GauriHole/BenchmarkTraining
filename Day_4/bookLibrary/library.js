// Library Management System
class bookLibrary {
  constructor() {
      this.books = [];
  }

  addBook(book) {
      this.books.push(book);
  }

  getBooksByAuthor(author) {
      return this.books.filter(book => book.author === author);
  }

  removeBook(title) {
      this.books = this.books.filter(book => book.title !== title);
  }

  getBooks() {
      return this.books.map(book => book.title);
  }
}

const myLibrary = new bookLibrary();

myLibrary.addBook({ title: "Ek Samandar, Mere Andar", author: "Sanjeev Joshi", yearPublished: 2024 });
myLibrary.addBook({ title: "Irrfan Khan: A Life in Movies", author: "Shubhra Gupta", yearPublished: 2023 });

console.log(myLibrary.getBooksByAuthor("Sanjeev Joshi")); 
console.log(myLibrary.getBooks()); 
myLibrary.removeBook("Ek Samandar, Mere Andar");
console.log(myLibrary.getBooks());
