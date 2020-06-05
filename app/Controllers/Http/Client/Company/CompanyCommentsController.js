'use strict'

const Company = use('App/Models/Company')
// const Product = use('App/Models/Product')
const RatingTransformer = use('App/Transformers/Rating/RatingTransformer')

class CompanyCommentsController {
  async index ({ params: { id }, response, transform, pagination }) {
    try {
      const company = await Company.findOrFail(id)

      let comments = await company.comments()
        .orderBy('updated_at', 'desc')
        .paginate(pagination.page, pagination.limit)

      comments = await transform.include('user').paginate(comments, RatingTransformer)

      return response.status(200).json(comments)
    } catch (error) {
      return response.status(400).send({ message: 'Falha na requisição, tente novamente!' })
    }
  }
}

module.exports = CompanyCommentsController
