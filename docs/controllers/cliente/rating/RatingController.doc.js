/**
 * @swagger
 * /v1/client/ratings:
 *   post:
 *     tags:
 *       - Avaliação
 *     name: Cadastro de nova avaliação na loga
 *     summary: Cadastro de nova avaliação na loga
 *     description: cadastra uma nova avalização
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
 *             company:
 *               type: string
 *               formate: uuid
 *               required: true
 *             rate:
 *               type: integer
 *               required: true
 *             comment:
 *               type: string
 *         required:
 *           - company
 *           - rate
 *
 *     responses:
 *       '200':
 *         description: retorna { data :rating:{} }.
 *       '400':
 *         description: Não foi possível realizar sua avaliação!
 *       '500':
 *         description: Problema no servidor.
 */
