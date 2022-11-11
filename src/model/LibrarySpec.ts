import Book from "./Book";

interface LibrarySpec {
  add(book: Book): void;
  getAll(): Book;
  searchByTitle(title: string): Book;
  remove(): void;
}

export default LibrarySpec;