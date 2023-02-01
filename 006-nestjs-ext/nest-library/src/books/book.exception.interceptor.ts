import {
  CallHandler,
  Injectable,
  NestInterceptor,
  ExecutionContext,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class ExceptionInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      tap((e) => {
        console.log({
          status: 'success',
          data: e, // данные из контроллера
        });
      }),
      catchError((err: any) => {
        console.log({
          status: 'fail',
          data: err, // сведения об ошибке
        });
        return err.message;
      }),
    );
  }
}
