/**
 * @swagger
 * /v1/auth/passwords:
 *   post:
 *     tags:
 *       - Auth
 *     name: Resete de senha
 *     summary: cria token para resetar a senha.
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
 *             email:
 *               type: string
 *         required:
 *           - email
 *     responses:
 *       '200':
 *         description: '{}'
 *       '404':
 *         description: Algo não deu certo, esse e-mail existe?
 */
