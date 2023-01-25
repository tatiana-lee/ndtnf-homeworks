import { Injectable } from '@nestjs/common';
import { Model, Connection } from 'mongoose';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Book, BookDocument } from './schemas/book.schema';
import { CreateBookDto } from './interfaces/dto/create-book';
import { UpdateBookDto } from './interfaces/dto/update-book';

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Book.name) private BookModel: Model<BookDocument>,
    @InjectConnection() private connection: Connection,
  ) {}

  public createBook(data: CreateBookDto): Promise<BookDocument> {
    const book = new this.BookModel(data);
    return book.save();
  }

  // getBook(id: number) {
  //   return this.books[id];
  // }

  public getBooks(): Promise<BookDocument[]> {
    return this.BookModel.find().exec();
  }

  public deleteBook(id: string) {
    return this.BookModel.findByIdAndRemove(id).exec();
  }

  public updateBook(id: string, data: UpdateBookDto): Promise<BookDocument> {
    return this.BookModel.findByIdAndUpdate({ _id: id }, data).exec();
  }
}
