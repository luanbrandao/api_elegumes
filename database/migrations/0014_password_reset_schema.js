'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PasswordResetSchema extends Schema {
  async up () {
    await this.db.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
    this.create('password_resets', (table) => {
      table.uuid('id').primary().defaultTo(this.db.raw('uuid_generate_v4()'))
      table.string('email', 254).notNullable()
      table.string('token').notNullable().unique()

      table.dateTime('expires_at')
      table.timestamps()

      table.foreign('email').references('email').inTable('users')
        .onDelete('cascade')
    })
  }

  down () {
    this.drop('password_resets')
  }
}

module.exports = PasswordResetSchema
