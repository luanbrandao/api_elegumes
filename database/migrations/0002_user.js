'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  async up () {
    await this.db.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')

    this.create('users', (table) => {
      // table.increments()
      table.uuid('id').primary().defaultTo(this.db.raw('uuid_generate_v4()'))
      table.string('username', 80).notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('phone', 20).notNullable()
      table.string('password', 60).notNullable()
      table.boolean('active').defaultTo(true)
      table.date('birth')

      table.boolean('confirmation_mail').defaultTo(false)
      table.timestamp('confirmation_mail_created_at')

      // forgot password
      table.string('token_forgot')
      table.timestamp('forgot_created_at')

      table
        .uuid('image_id')
        .unsigned()
        .references('id')
        .inTable('images')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')

      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
