'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Order extends Model {
  // informa que a tabela não tem o campo timesTamp
  static get traits () {
    return ['App/Models/Traits/NoTimestamp']
  }

  items () {
    // hasMany, pois 1 pedido pode ter varias orderns,
    // mas uma ordem só pode pertencer a 1 pedido
    // tem vários itens
    return this.hasMany('App/Models/OrderItem')
  }

  user () {
    return this.belongsTo('App/Models/User', 'user_id', 'id')
  }

  company () {
    return this.belongsTo('App/Models/Company', 'company_id', 'id')
  }
}

module.exports = Order
