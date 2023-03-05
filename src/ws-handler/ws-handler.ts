import { INestApplicationContext, Logger, LoggerService } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { APIGatewayEvent } from 'aws-lambda';
import { AppModule } from 'src/app.module';

let app: INestApplicationContext;
let logger: LoggerService;

interface ReturnType {
  statusCode: number;
  isBase64Encoded: boolean;
  body?: string;
}

export const handler = async (event: APIGatewayEvent): Promise<ReturnType> => {
  if (!app) {
    app = await NestFactory.createApplicationContext(AppModule, {});

    logger = new Logger();

    logger.log({ message: 'app initialized' });
  }

  logger.log(`received ws event: ${JSON.stringify(event)}`);

  switch (event.requestContext.routeKey) {
    case '$connect':
      logger.log(
        `received connect request from id: ${event.requestContext.connectionId}`,
      );
      break;
    case '$disconnect':
      logger.log(
        `received disconnect request from id: ${event.requestContext.connectionId}`,
      );
      break;
    case '$default':
      logger.log(
        `received ws event from id: ${
          event.requestContext.connectionId
        }, body: ${JSON.stringify(event.body)}`,
      );
      break;
    default:
      logger.log('unhandled message');
  }

  return { statusCode: 200, isBase64Encoded: false, body: 'Success' };
};
