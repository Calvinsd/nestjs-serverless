import { INestApplication, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { json, urlencoded } from 'express';
import helmet from 'helmet';
import { AppModule } from './app.module';

export async function createNestApp(): Promise<INestApplication> {
  const app = await NestFactory.create(AppModule, {
    bodyParser: true,
    rawBody: false,
  });

  const sizeLimit = '10mb';

  app.use(json({ limit: sizeLimit }));
  app.use(urlencoded({ limit: sizeLimit, extended: true }));
  app.enableCors();
  app.use(helmet());

  app.useGlobalPipes(
    new ValidationPipe({
      // NOTE: Function can be used to send custom error messages
      // exceptionFactory: (errors: ValidationError[]): unknown =>
      //   new BadRequestException(errors),
      dismissDefaultMessages: false,
      forbidUnknownValues: true,
      forbidNonWhitelisted: true,
      whitelist: true,
      transform: true,
      disableErrorMessages: false, // NOTE: set to true on prod
      validationError: {
        target: false,
        value: true,
      },
    }),
  );

  return app;
}
