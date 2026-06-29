// backend/src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config(); // Load .env file
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Allow requests from mobile app
  await app.listen(3000);
  console.log('ChargeUp PH backend running at http://localhost:3000');
}
bootstrap();
