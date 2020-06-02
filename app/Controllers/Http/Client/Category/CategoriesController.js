'use strict'

const Category = use('App/Models/Category')
// const SimpleCategoryTransformer = use('App/Transformers/Category/SimpleCategoryTransformer')
const SimpleProductDefaultTransformer = use('App/Transformers/Product/SimpleProductDefaultTransformer')
class CategoriesController {
  async index ({ request, response, transform, pagination }) {
    try {
      // const query = Category.query()
      // let categories
      // categories = await query.paginate(pagination.page, pagination.perpage)
      // categories = await transform.collection(categories, SimpleCategoryTransformer)
      // return response.status(200).json({ data: { categories } })

      /**
       * foi feita dessa forma pois não consegui limitar o retorna na collection,
       * estava retornando todos os produtos da caregoria
      */

      const allCategories = await Category.all()

      const page = pagination.perpage || 5

      const categories = await transform.collection(allCategories, async category => {
        let produtcs = await category.productDefault()
          .orderBy('name')
          .limit(page)
          .fetch()
        // let produtcs = await category.productDefault()
        produtcs = await transform.collection(produtcs, SimpleProductDefaultTransformer)

        return {
          name: category.title,
          id: category.id,
          products: produtcs
        }
      })

      return response.status(200).json({ data: { categories } })
    } catch (error) {
      return response.status(400).send({ message: error })
      // return response.status(400).send({ message: 'Falha na requisição, tente novamente!' })
    }
  }
}

module.exports = CategoriesController
