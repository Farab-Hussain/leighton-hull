import { NestFactory } from "@nestjs/core";
import { AppModule } from "@/app.module";
import { GlobalExceptionFilter } from "src/utils/filters/global-exception.filter";
import { ResponseFormInterceptor } from "src/utils/interceptors/response-form.interceptor";
import { HttpStatus, ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as cookieParser from "cookie-parser";
import * as useragent from "express-useragent";
import helmet from "helmet";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: "https://leighton-hull-backend.vercel.app",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  });
  app.use(cookieParser());
  app.use(useragent.express());

  app.use(helmet());

  //apply global exception filters
  app.useGlobalFilters(new GlobalExceptionFilter());
  // apply global interceptors
  app.useGlobalInterceptors(new ResponseFormInterceptor());
  // apply global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE,
      whitelist: true,
      validateCustomDecorators: true
    })
  );

  const configService = app.get(ConfigService);
  const PORT = configService.get<string>("PORT");

  await app.listen(PORT ?? 3001);
}

bootstrap()
  .then(() => {
    // eslint-disable-next-line no-console
    console.log("Server started");
  })
  .catch(() => {});
