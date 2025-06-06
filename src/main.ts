import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS before starting the server
  app.enableCors({
    origin: 'http://localhost:3000', // your frontend URL
    credentials: true,
  });

  // Listen only once on port from env or default 4000
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
