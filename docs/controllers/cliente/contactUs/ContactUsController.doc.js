/**
 * @swagger
 * /v1/client/contacts:
 *   post:
 *     tags:
 *       - Fale Conosco
 *     name: Fale conosco do cliente
 *     summary: Fale conosco do cliente
 *     description: Fale conosco do cliente
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
 *           properties:
 *             title:
 *               type: string
 *               required: true
 *             message:
 *               type: string
 *               required: true
 *         required:
 *           - title
 *           - message
 *
 *     responses:
 *       '200':
 *         description: retorna { data :contactUs:{} }.
 *       '400':
 *         description: Não foi possível realizar seu contato!!
 *       '500':
 *         description: Problema no servidor.
 */
