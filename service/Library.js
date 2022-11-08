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
}

export default Library;