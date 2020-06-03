'use strict'

const Route = use('Route')

Route.resource('v1/images', 'ImageController')
  .apiOnly()
