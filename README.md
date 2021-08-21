<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

  
# GRPC APP

A project to study **gRPC** protocol using **NestJS**


## Environment Variables

To run this project, you will need to add the following environment variables to the **grpc-client** and the **grpc-server** .env file

`GRPC_CONNECTION_URL`

  
## Installation

Download grpc-app

```bash
git clone https://github.com/pjavier98/grpc-app

cd grpc-app
```

### Client:

#### Using yarn:
```bash
  cd grpc-client

  yarn
  
  yarn start:dev
```

#### Using npm:
```bash
  cd grpc-client

  npm i
  
  npm run start:dev
```

### Server:

#### Using yarn:
```bash
  cd grpc-server

  yarn
  
  yarn start:dev
```

#### Using npm
```bash
  cd grpc-server

  npm i
  
  npm run start:dev
```
    
## API Reference

```http
  POST /subscriptions
  
  curl --request POST --url http://localhost:3000/subscribers -H "Content-Type: application/json" -d '{ "name": "Jhon Doe", "email": "jhondoe@email.com"}'
```

| Parameter | Type     | Description      |
| :-------- | :------- | :----------------|
| `name`      | `string` | **Required**   |
| `email`      | `string` | **Required**  |

#### Get all subscriptions

```http
  GET /subscriptions
  
  $ curl --request GET --url http://localhost:3000/subscribers
```

#### Get subscription

```http
  GET /subscriptions/${id}
  
  curl --request GET --url http://localhost:3000/subscribers/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


  
