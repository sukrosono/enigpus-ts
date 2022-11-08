import Book from "./model/Book.js";
import Library from "./service/Library.js"

let library= new Library();
let book= new Book('x012', 'javascript for dummies', 'O\'rely', 2010, 'Jution');
library.add(book);
book= new Book('x013', 'java for dummies', 'Enigma', 2011, 'Doni');
library.add(book);
book= new Book('x014', 'Head first spring', 'Enigma', 2012, 'Jution');
library.add(book);
book= new Book('x015', 'Head first PHP', 'ap programming', 2013, 'Adi');
library.add(book);
book= new Book('x016', 'Head first CSS', 'Enigma', 2014, 'Jution');
library.add(book);
book= new Book('x017', 'Head first HTML', 'Enigma', 2015, 'Jution');
library.add(book);

console.log(library.searchByTitle('Head first PHP'));
console.log(library.getAll());