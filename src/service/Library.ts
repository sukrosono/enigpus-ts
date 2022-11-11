import Book from "../model/Book";

class Library {
  private books: Book[];
  constructor() {
    this.books= [];
  }

  add(book: Book) {
    this.books.push(book);
  }

  getAll() {
    return this.books;
  }

  searchByTitle(title: String) {
    return this.books.filter(book=> 
      book.title.toLowerCase()===title.toLowerCase());
  }

  remove(code: string) {
    this.books= this.books.filter(book=>
      book.code!=code);
  }
}

export default Library;