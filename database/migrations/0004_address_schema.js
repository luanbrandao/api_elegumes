'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AdressSchema extends Schema {
  async up () {
    await this.db.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
    this.create('addresses', (table) => {
      table.uuid('id').primary().defaultTo(this.db.raw('uuid_generate_v4()'))
      table.string('description', 200)
      table.string('street', 200)
      table.integer('cep', 15)
      table.integer('number', 15)
      table.text('neighborhood')
      table.string('city')
      table.string('state')
      table
        .uuid('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.timestamps()
    })
  }

  down () {
    this.drop('addresses')
  }
}

module.exports = AdressSchema
