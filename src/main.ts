import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Puerto 3001 para el microservicio de clientes
  const port = 3001;
  await app.listen(port);
  console.log(`Microservicio ms-clientes corriendo en el puerto: ${port}`);
}
bootstrap();