import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class BooksTitleValidationPipe implements PipeTransform {
  transform(title: any) {
    if (title.length < 1) {
      throw new Error('Title cannot be empty!');
    }
  }
}
