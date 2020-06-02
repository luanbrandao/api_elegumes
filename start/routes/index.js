'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */

require('./auth/confirmationMail')
require('./client/auth/register')
require('./client/auth/login')
require('./client/dashboard/dashboard')
require('./client/image/image')
require('./client/search/search')

// Route.get('/hello', async () => {
//   return { greeting: 'ELegumes' }
// })

// Route.get('/', async () => {
//   return { greeting: 'Hello world in JSON' }
// })
