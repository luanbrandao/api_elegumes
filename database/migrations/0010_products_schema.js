'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductsSchema extends Schema {
  async up () {
    await this.db.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
    this.create('products', (table) => {
      table.uuid('id').primary().defaultTo(this.db.raw('uuid_generate_v4()'))
      table.decimal('price', 12, 2)
      table.boolean('active_promotion').defaultTo(false)
      table.decimal('price_promotion', 12, 2)
      table.text('description')
      table.text('technical_description')
      table.boolean('active').defaultTo(false)
      table.enu('type', ['amount', 'weight'])
      table
        .uuid('company_id')
        .unsigned()
        .references('id')
        .inTable('companies')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table
        .uuid('image_id')
        .unsigned()
        .references('id')
        .inTable('images')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table
        .uuid('product_default_id')
        .unsigned()
        .references('id')
        .inTable('product_defaults')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductsSchema
