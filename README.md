Sample project for "Backend For Frontend with NestJS - usage patterns.pptx" 

## Overview
Sample implemenation to illustrate "Backend For Frontend" pattern
https://samnewman.io/patterns/architectural/bff/

Uses TypeScript, NestJS and Koa

### start Domain Service 

```bash
$ npm run service:start
```
- [sample query: tickets](http://localhost:3100/tickets)
- [api-docs (swagger)](http://localhost:3100/api-docs)
- [api-schema](http://localhost:3100/api-schema)

### start BFF

```bash
$ npm start
```
- [aggeragtes query: tickets+component+persons](http://localhost:3000/api-docs)
- [api-docs (swagger)](http://localhost:3000/api-docs)
- [api-schema](http://localhost:3000/api-schema)



see package.json for more commands 

## Commands used

```bash
$ npm i -g @nestjs/cli
$ nest new nestjs-bff-sample
$ nest g module tickets
$ nest g controller tickets
$ nest g service tickets
$ typescript-json-schema ticket.model.ts Ticket > ticket.json
$ son2yaml ticket.json > ticket.yaml
$ multi-file-swagger index.yaml > schema.json
$ npm i swagger-data-generator -g
$ sdg schema.json data.json
```
