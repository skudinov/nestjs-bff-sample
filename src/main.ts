import * as express from 'express';
import {NestFactory} from '@nestjs/core';
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger';
import {ApplicationModule} from './app.module';
import {AnyExceptionFilter} from './common';
import * as pino from 'express-pino-logger';

async function bootstrap() {
  // create express server and nest app
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
  server.use('/api-schema', (req, res, next) => res.send(document));

  // init logging
  server.use(pino());

  // init nest globals
  app.useGlobalFilters(new AnyExceptionFilter());

  // listen
  await app.listen(3000);
}

bootstrap();
