class Book {
  constructor(code, title, publisher, year, author) {
    this.code= code;
    this.title= title;
    this.publisher= publisher;
    this.year= year;
    this.author= author;
  }

  getInfo() {
    console.log(`${this.code} \t | ${this.title} \t | ${this.publisher} \t | ${this.year} \t | ${this.author}`);
  }
}

export default Book;