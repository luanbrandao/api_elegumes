'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('App/Models/User', (faker) => {
  return {
    username: faker.first(),
    email: faker.email({ domain: 'gmail.com.br' }),
    phone: '123123123',
    password: 'adsfasdf'
  }
})

// Factory.blueprint('App/Models/CategoryCampany', (faker) => {
//   return {
//     name: faker.first(),
//     icon_name: 'icon',
//     icon_color: 'azul'
//   }
// })

// Factory.blueprint('App/Models/User', (faker) => {
//   return {
//     username: faker.username()
//   }
// })
