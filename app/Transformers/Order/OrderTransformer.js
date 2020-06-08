'use strict'

const BumblebeeTransformer = use('Bumblebee/Transformer')
const UserTransformer = use('App/Transformers/Client/UserTransformer')
const OrderItemTransformer = use('App/Transformers/Order/OrderItemTransformer')

/**
 * OrderTransformer class
 *
 * @class OrderTransformer
 * @constructor
 */
class OrderTransformer extends BumblebeeTransformer {
  // opcionais
  static get availableInclude () {
    return ['user', 'items']
  }

  transform (order) {
    order = order.toJSON()
    return {
      id: order.id,
      subtotal:
        (order.__meta__ && order.__meta__.subtotal)
          ? parseFloat(order.__meta__.subtotal).toFixed(2)
          : 0,
      status: order.status,
      total: order.total ? parseFloat(order.total).toFixed(2) : 0,
      qty_items: order.qty_items,
      date: order.created_at
    }
  }

  includeUser (order) {
    return this.item(order.getRelated('user'), UserTransformer)
  }

  includeItems (order) {
    return this.collection(order.getRelated('items'), OrderItemTransformer)
  }
}

module.exports = OrderTransformer
