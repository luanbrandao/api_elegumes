'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ConfirmationMailSchema extends Schema {
  async up () {
    await this.db.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
    this.create('confirmation_mails', (table) => {
      table.uuid('id').primary().defaultTo(this.db.raw('uuid_generate_v4()'))
      table.string('email', 254).notNullable()
      table.string('token').notNullable().unique()
      table.string('username')
      table
        .uuid('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('cascade')

      table.timestamps()
    })
  }

  down () {
    this.drop('confirmation_mails')
  }
}

module.exports = ConfirmationMailSchema
