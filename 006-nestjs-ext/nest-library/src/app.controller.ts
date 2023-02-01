import { Controller, Get, HttpException, UseFilters } from '@nestjs/common';
import { UseInterceptors } from '@nestjs/common/decorators';
import { ExceptionInterceptor } from './books/book.exception.interceptor';
import { AppService } from './app.service';
import { HttpExceptionFilter } from './http.exception.filter';

// @UseInterceptors(ExceptionInterceptor)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseFilters(HttpExceptionFilter)
  getHello(): string {
    throw new HttpException('Oops', 401);

    return this.appService.getHello();
  }
}
