'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ImageSchema extends Schema {
  async up () {
    await this.db.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
    this.create('images', (table) => {
      // table.increments()
      table.uuid('id').primary().defaultTo(this.db.raw('uuid_generate_v4()'))
      table.string('path', 255)
      table.integer('size').unsigned()
      table.string('original_name', 100)
      table.string('extension', 10)
      table.timestamps()
    })
  }

  down () {
    this.drop('images')
  }
}

module.exports = ImageSchema
