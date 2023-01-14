import { Injectable } from '@nestjs/common';
import { IBook } from './interfaces/book.interface';

@Injectable()
export class BooksService {
  private readonly books: IBook[] = [];

  createBook(book: IBook) {
    this.books.push(book);
  }

  getBook(id: number) {
    return this.books[id];
  }

  getBooks(): IBook[] {
    return this.books;
  }

  deleteBook(id: number) {
    return this.books.splice(id, 1);
  }
}
