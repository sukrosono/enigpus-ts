import Book from "./model/Book.js";
import Library from "./service/Library.js"

let library= new Library();
let book= new Book('x012', 'javascript for dummies', 'O\'rely', 2010, 'Jution');
library.add(book);
console.log(library);
