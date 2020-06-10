/**
 * @swagger
 * /v1/client/orders:
 *   post:
 *     tags:
 *       - Pedido
 *     name: Cadastro de novo pedido
 *     summary: cadastro de novo pedido do cliente
 *     description: o produto pode ser vendido por quantidado ou peso, 1000 = 1kg
 *     security:
 *       - bearerAuth: []
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *           type: object
 *
 *
 *           properties:
 *             items:
 *
 *               type: array
 *               required: true
 *               items:
 *                  type: object
 *                  properties:
 *                   product_id:
 *                     type: string
 *                     format: uuid
 *                   [quantity, weight]:
 *                     type: integer
 *             company:
 *               type: string
 *               required: true

 *           example:
 *            items: [{product_id,quantity},{product_id,weight}]
 *            company: sadf
 *
 *
 *

 *
 *     responses:
 *       '200':
 *         description: Retarna um objeto com os itens e informações do pedido criado.
 *       '400':
 *         description: Não foi possível criar seu pedido no momento!
 *       '500':
 *         description: Problema no servidor.
 */

/**
 * @swagger
 * /v1/client/orders:
 *   get:
 *     tags:
 *       - Pedido
 *     name: Retorna todos os pedidos do usuárop
 *     summary: Retorna todos os pedidos do usuárop
 *     description: retorna os pedidos ordenado por data e com paginação, filtro do status.
 *     security:
 *       - bearerAuth: []
  *     parameters:
 *       - name: status
 *         in: query
 *         type: string
 *         description: filtros, retorna os pedidos por status
 *       - name: page
 *         in: query
 *         type: interge
 *         description: número da página
 *       - name: perpage
 *         in: query
 *         type: interge
 *         description: qtd de valores no retorno
 *     responses:
 *       '200':
 *         description: retorna { categories }.
 *       '400':
 *         description: Falha na requisição, tente novamente
 */
