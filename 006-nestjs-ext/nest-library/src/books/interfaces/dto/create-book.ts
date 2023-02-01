import { IBook } from '../book.interface';

export interface CreateBookDto {
  title: IBook['title'];
  description: IBook['description'];
  authors: IBook['authors'];
}
