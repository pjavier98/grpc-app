```bash
$ yarn start:dev
```

Create Subscriber
```bash
$ curl --request POST --url http://localhost:3000/subscribers -H "Content-Type: application/json" -d '{ "name": "Jhon Doe", "email": "jhondoe@email.com"}'
```

Find All Subscribers
```bash
$ curl --request GET --url http://localhost:3000/subscribers
```

Find One
```bash
curl --request GET --url http://localhost:3000/subscribers/:id
```