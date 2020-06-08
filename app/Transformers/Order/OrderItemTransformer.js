'use strict'

const BumblebeeTransformer = use('Bumblebee/Transformer')
const ProductTransformer = use('App/Transformers/Product/ProductTransformer')
/**
 * OrderItemTransformer class
 *
 * @class OrderItemTransformer
 * @constructor
 */
class OrderItemTransformer extends BumblebeeTransformer {
  static get defaultInclude () {
    return ['product']
  }

  transform (product) {
    return {
      id: product.id,
      subtotal: product.subtotal,
      quantity: product.quantity,
      weight: product.weight
    }
  }

  includeProduct (orderItem) {
    return this.item(orderItem.getRelated('product'), ProductTransformer)
  }
}

module.exports = OrderItemTransformer
