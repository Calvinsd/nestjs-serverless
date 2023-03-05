import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';
import { createNestApp } from './app';

import { configure as serverlessExpress } from '@vendia/serverless-express';

let server: Handler;

async function createServer(): Promise<Handler> {
  const app = await createNestApp();

  await app.init();

  const appInstace = await app.getHttpAdapter().getInstance();

  return serverlessExpress({ app: appInstace });
}

export async function handler(
  event: APIGatewayEvent,
  context: Context,
  callback: Callback,
): Promise<Handler> {
  if (!server) {
    server = await createServer();
  }

  return server(event, context, callback);
}
