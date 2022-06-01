# Nest JS & Angular: CMS

_May 2022_

> 🔨 Nest JS & Angular - CMS. From udemy: [Créer une app FullStack TypeScript avec Angular et NestJS](https://www.udemy.com/course/creer-une-app-fullstack-typescript-avec-angular-et-nestjs).

---

<h1 align="center">
    <img src="_readme-img/logo.png">
</h1>

## Nest JS: Server

### Running the app

```bash
# development
$ cd server
$ npm install
$ npm run start

# watch mode
$ cd server
$ npm run start:dev

# production mode
$ cd server
$ npm run start:prod
```

Launch: [http://localhost:3000/](http://localhost:3000/)

### CRUD Test (using Curl)

#### Put articles

```bash
curl -X PUT http://localhost:3000/articles/628b9d3d0fc27e880b8f308b -H 'Content-Type: application/json' -H 'Accept: application/json' -d '{"title": "Last article edit2", "content":"Last article edit2"}'
```

### Passport strategy

- [passport-local](https://www.passportjs.org/packages/passport-local/): Passport strategy for authenticating with a username and password.
-
- [passport-jwt](https://www.passportjs.org/packages/passport-jwt/): A Passport strategy for authenticating with a JSON Web Token.

### Dependancies

- [@nestjs/mongoose](https://www.npmjs.com/package/@nestjs/mongoose): Mongoose module for Nest.

`npm install --save @nestjs/mongoose mongoose`

NB:

1. with Mongoose, to connect Mongo Atlas database, we need to use the older connection string: `mongodb://<username>:<password>@<main-shard-00-00-03xkr.mongodb.net>:27017,<cluster0-shard-xx-xx-xxxxx.mongodb.net>:27017,<cluster0-shard-xx-xx-xxxxx.mongodb.net>:27017//<dbname>?ssl=true&replicaSet=Main-shard-0&authSource=admin&retryWrites=true`
2. with ConfigModule, we can use the newer string: `mongodb+srv://<username>:<password>@<cluster0-shard-xx-xx-xxxxx.mongodb.net>/<dbname>?retryWrites=true&w=majority`

- [@nestjs/config](https://www.npmjs.com/package/@nestjs/config): Configuration module for Nest based on the dotenv (to load process environment variables) package.

`npm i --save @nestjs/config`

- [@nestjs/passport](https://docs.nestjs.com/security/authentication): Passport is the most popular node.js authentication library, well-known by the community and successfully used in many production applications. It's straightforward to integrate this library with a Nest application using the @nestjs/passport module.

`npm install --save @nestjs/passport passport passport-local`

- [@nestjs/jwt](https://docs.nestjs.com/security/authentication): The @nestjs/jwt package (JOT) is a utility package that helps with JWT manipulation. The passport-jwt package is the Passport package that implements the JWT strategy and @types/passport-jwt provides the TypeScript type definitions.

`npm install --save @nestjs/jwt passport-jwt`

## Angular: Client

### Running the app

```bash
# development
$ cd client
$ npm install
$ npm run start

# production mode
$ cd client
$ npm run build
```

Launch: [http://localhost:4200/](http://localhost:4200/)

## Useful links

- [codeconcept/cms-nestjs](https://github.com/codeconcept/cms-nestjs)
- [codeconcept/cms-nestjs-ng](https://github.com/codeconcept/cms-nestjs-ng)
- [Nest: Environment configuration](https://docs.nestjs.com/techniques/configuration)
- [Nest.js | Middleware, Pipes & Interceptors Explained By Example](https://www.youtube.com/watch?v=x1W3FJ1RJlM&ab_channel=MichaelGuay)
- [Passport is authentication middleware for Node.js.](https://www.passportjs.org/)
- [Angular: Jasmine core problem](https://stackoverflow.com/questions/67433893/unable-to-resolve-dependency-tree-error-for-creating-new-angular-project)
- [Angular Building blocks](https://slides.com/sajeetharan/deck-62536557-5a27-40cd-a98e-3fc7f3c6517a-11-10#/14)

## License

Nest is [MIT licensed](LICENSE).
