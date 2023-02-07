import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  UsePipes,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './interfaces/dto/create-book';
import { UpdateBookDto } from './interfaces/dto/update-book';
import { IParamId } from './interfaces/param-id';
import { JoiValidationPipe } from './joi.validation.pipe';
import { BookDocument } from './schemas/book.schema';
import { bookSchema } from './schemas/joi.book.shema';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}
  @Get()
  getBooks(): Promise<BookDocument[]> {
    return this.booksService.getBooks();
  }

  @UsePipes(new JoiValidationPipe(bookSchema))
  @Post()
  public createBook(@Body() body: CreateBookDto) {
    return this.booksService.createBook(body);
  }

  @Put(':id')
  public updateBook(
    @Param() { id }: IParamId,
    @Body() body: UpdateBookDto,
  ): Promise<BookDocument> {
    return this.booksService.updateBook(id, body);
  }

  @Delete(':id')
  public deleteBook(@Param() { id }: IParamId): Promise<BookDocument> {
    return this.booksService.deleteBook(id);
  }
}
