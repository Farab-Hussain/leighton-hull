import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Response } from "express";
import { map, Observable } from "rxjs";

export class ResponseFormInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<unknown>): Observable<unknown> | Promise<Observable<unknown>> {
    const status = context.switchToHttp().getResponse<Response>().statusCode;
    return next.handle().pipe(
      map((rsp: unknown) => ({
        meta: {
          error: null,
          status
        },
        data: rsp === undefined ? null : rsp
      }))
    );
  }
}
