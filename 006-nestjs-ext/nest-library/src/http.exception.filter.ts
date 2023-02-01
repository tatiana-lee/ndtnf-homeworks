import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();

    response.status(status).json({
      timestamp: new Date().toISOString(), // дата и время
      status: 'fail',
      data: Error, // сведения об ошибке
      code: status || 500, // код ошибки при наличии в объекте ошибки. В случае отсутствия, по умолчанию code = 500
    });
  }
}
