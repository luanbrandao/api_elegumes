'use strict'

const OrderItemHook = (exports = module.exports = {})
const Product = use('App/Models/Product')
OrderItemHook.updateSubtotal = async modelInstance => {
  const product = await Product.find(modelInstance.product_id)
  if (product.type === 'amount') {
    modelInstance.subtotal = modelInstance.quantity * product.price
  } else if (product.type === 'weight') {
    modelInstance.subtotal = (modelInstance.weight / product.weight) * product.price
    modelInstance.quantity = 1
  }
}
