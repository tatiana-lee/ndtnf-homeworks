import { Controller, Get, Param } from '@nestjs/common';
import { UseInterceptors } from '@nestjs/common/decorators';
import { ExceptionInterceptor } from './books/book.exception.interceptor';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { IParamId } from './books/interfaces/param-id';

@UseInterceptors(ExceptionInterceptor)
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
  ) {}
  @Get('/token/:id')
  getToken(@Param() { id }: IParamId): string {
    return this.authService.createToken({ _id: id });
  }
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
