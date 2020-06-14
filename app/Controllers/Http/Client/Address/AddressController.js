'use strict'

const Address = use('App/Models/Address')
const AddressTransformer = use('App/Transformers/Address/AddressTransformer')
class AddressController {
  async store ({ request, response, transform, auth }) {
    const client = await auth.getUser()

    try {
      const data = request.only(['description', 'street', 'cep', 'number', 'neighborhood', 'city', 'state', 'lat', 'long'])

      const _address = await Address.create({ ...data, user_id: client.id })
      const address = await transform.item(_address, AddressTransformer)

      return response.status(200).json({ data: address })
    } catch (error) {
      return response.status(400).send({ message: 'Falha na requisição, tente novamente!' })
    }
  }
}

module.exports = AddressController
