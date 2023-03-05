import { createNestApp } from './app';

const port = 9000;

async function bootstrap() {
  const app = await createNestApp();
  await app.listen(port);
}
bootstrap();
