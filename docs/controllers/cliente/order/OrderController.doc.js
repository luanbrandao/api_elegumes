/**
 * @swagger
 * /v1/client/order:
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
