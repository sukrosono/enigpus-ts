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
}

export default Library;