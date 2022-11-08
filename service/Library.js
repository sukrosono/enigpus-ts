class Library {
  constructor() {
    this.books= [];
  }

  add(book) {
    this.books.push(book);
  }

  getAll() {
    return this.books;
  }

  searchByTitle(title) {
    return this.books.filter(book=> 
      book.title.toLowerCase()===title.toLowerCase());
  }

  remove(code) {
    this.books= this.books.filter(book=>
      book.code!=code);
  }
}

export default Library;