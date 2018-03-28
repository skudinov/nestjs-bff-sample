import * as express from 'express';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ApplicationModule } from './app.module';

async function bootstrap() {
  const server = express();
  const app = await NestFactory.create(ApplicationModule, server as any);
	// init swagger
  const options = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api-docs', app, document);
  app.use('/api-schema', (req, res, next) => res.send(document));

	await app.listen(3000);
}
bootstrap();
