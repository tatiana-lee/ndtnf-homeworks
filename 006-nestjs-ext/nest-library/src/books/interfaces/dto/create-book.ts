import { IBook } from '../book.interface';

export interface CreateBookDto {
  title: IBook['title'];
  description: IBook['description'];
  authors: IBook['authors'];
  favorite: IBook['favorite'];
  fileCover: IBook['fileCover'];
  fileName: IBook['fileName'];
  fileBook: IBook['fileBook'];
}
