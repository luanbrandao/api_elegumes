'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategoryProductSchema extends Schema {
  async up () {
    await this.db.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
    this.create('category_product', (table) => {
      table.uuid('id').primary().defaultTo(this.db.raw('uuid_generate_v4()'))

      table.uuid('product_id').unsigned()
        .references('id')
        .inTable('products')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')

      table.uuid('category_id').unsigned()
        .references('id')
        .inTable('categories')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
    })
  }

  down () {
    this.drop('category_product')
  }
}

module.exports = CategoryProductSchema
