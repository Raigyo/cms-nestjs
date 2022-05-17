# Nest JS & Angular: CMS

_May 2022_

> 🔨 Nest JS & Angular - CMS. From udemy: [Créer une app FullStack TypeScript avec Angular et NestJS](https://www.udemy.com/course/creer-une-app-fullstack-typescript-avec-angular-et-nestjs).

---

<h1 align="center">
    <img src="_readme-img/logo.png">
</h1>

## Installation

```bash
$ npm install
```

## Running the app (Nest JS)

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

Launch: [http://localhost:3000/](http://localhost:3000/)

## Running the app (Angular)

## Dependancies

- [@nestjs/mongoose](https://www.npmjs.com/package/@nestjs/mongoose): Mongoose module for Nest.

`npm install --save @nestjs/mongoose mongoose`

NB:

1. with Mongoose, to connect Mongo Atlas database, we need to use the older connection string: `mongodb://<username>:<password>@<main-shard-00-00-03xkr.mongodb.net>:27017,<cluster0-shard-xx-xx-xxxxx.mongodb.net>:27017,<cluster0-shard-xx-xx-xxxxx.mongodb.net>:27017//<dbname>?ssl=true&replicaSet=Main-shard-0&authSource=admin&retryWrites=true`
2. with ConfigModule, we can use the newer string: `mongodb+srv://<username>:<password>@<cluster0-shard-xx-xx-xxxxx.mongodb.net>/<dbname>?retryWrites=true&w=majority`

- [@nestjs/config](https://www.npmjs.com/package/@nestjs/config): Configuration module for Nest based on the dotenv (to load process environment variables) package.

`npm i --save @nestjs/config`

## Useful links

- [Environment configuration](https://docs.nestjs.com/techniques/configuration)

## License

Nest is [MIT licensed](LICENSE).
