'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategoryProductSchema extends Schema {
  async up () {
    await this.db.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
    this.create('product_defaults', (table) => {
      table.uuid('id').primary().defaultTo(this.db.raw('uuid_generate_v4()'))
      table.string('name', 200)
      table.boolean('active').defaultTo(false)
      table.integer('weekly_sales', 8)
      table.integer('monthly_sales', 8)
      table
        .uuid('category_id')
        .unsigned()
        .references('id')
        .inTable('categories')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
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
    this.drop('product_defaults')
  }
}

module.exports = CategoryProductSchema
