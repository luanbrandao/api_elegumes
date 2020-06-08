'use strict'

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Swagger Information
  | Please use Swagger 2 Spesification Docs
  | https://swagger.io/docs/specification/2-0/basic-structure/
  |--------------------------------------------------------------------------
  */

  enable: true,
  specUrl: '/swagger.json',

  options: {
    swaggerDefinition: {
      info: {
        title: 'ELegumes MarketPlace 💘 Swagger',
        version: '0.0.1',
        contact: {
          name: 'Luan Brandão',
          email: 'luanbrandao4@gmil.com',
          url: ''
        },
        license: {
          name: 'MIT',
          url: 'https://opensource.org/licenses/MIT'
        },
        description: 'Funcionalidades desenvolvidas na API até o',
        termsOfService: 'https://opensource.org/licenses/MIT'
      },

      basePath: '/',

      // Example security definitions.
      securityDefinitions: {
        bearerAuth: {
          type: 'apiKey',
          name: 'Authorization',
          scheme: 'bearer',
          in: 'header'
        }
      }
    },
    apis: [
      // 'app/**/*.js',
      'docs/**/*.js',
      'start/routes.js'
    ]
  }
}
