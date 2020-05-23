´´´
npm install -D eslint
npx eslint --init 

documentation
npm i adonis-swagger

adonis install @adonisjs/validator
adonis install adonis-bumblebee

adonis install @adonisjs/mail
´´´

# Erros Logs Reports
adonis make:ehandler 

# Sentry
npm install raven 
yarn add @sentry/node@5.15.5

# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

## Test
``
adonis install @adonisjs/vow
