import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { DocumentBuilder,SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  const port = Number(process.env.PORT) || 8080;

  const config = new DocumentBuilder()
    .setTitle('API Telegram')
    .setDescription('API responsavel pelo cadastro e acesso ao BOT GAIA no telegram.')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);
  
  await app.listen(port, '0.0.0.0');
}
bootstrap();