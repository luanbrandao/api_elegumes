'use strict'

const Model = use('Model')

/**
*  @swagger
*  definitions:
*    User:
*      type: object
*      properties:
*        id:
*          type: uuid
*        username:
*          type: string
*        email:
*          type: string
*        password:
*          type: string
*        phone:
*          type: string
*        birth:
*          type: string
*
*      required:
*        - username
*        - email
*        - password
*        - phone
*/
class User extends Model {
}

module.exports = User
