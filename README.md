[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

![ts](https://flat.badgen.net/badge/-/TypeScript?icon=typescript&label&labelColor=blue&color=555555)

  
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


  
