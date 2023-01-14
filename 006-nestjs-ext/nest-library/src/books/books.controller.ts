import { Body, Controller, Get, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './interfaces/book.dto';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}
  @Get()
  getBooks() {
    return this.booksService.getBooks();
  }
  getBook(id: number) {
    return this.booksService.getBook(id);
  }

  @Post()
  createBook(@Body() createBookDto: CreateBookDto) {
    this.booksService.createBook(createBookDto);
  }
  deleteBook(@Body() id: number) {
    this.booksService.deleteBook(id);
  }
}
