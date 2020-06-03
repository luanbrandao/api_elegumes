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

/**
 * public client end admin
 */
require('./auth/confirmationMail')

/**
 * private client end admin
 */
require('./image')

/**
 * authenticarion cliente
 */
require('./client/auth')

/**
 * Import Client (public) Routes
 */
require('./client/public')
