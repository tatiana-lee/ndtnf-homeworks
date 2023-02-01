import { Controller, Get } from '@nestjs/common';
import { UseInterceptors } from '@nestjs/common/decorators';
import { ExceptionInterceptor } from './books/book.exception.interceptor';
import { AppService } from './app.service';

@UseInterceptors(ExceptionInterceptor)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
