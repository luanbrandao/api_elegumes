/**
 * @swagger
 * /v1/auth/client/login:
 *   post:
 *     tags:
 *       - Auth
 *     name: Login de Cliente
 *     summary: usuário se autêntica na aplicação
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
 *             email:
 *               type: string
 *             password:
 *               type: string
 *         required:
 *           - email
 *           - password
 *     responses:
 *       '200':
 *         description: Retarna um objeto cmo o token.
 *       '400':
 *         description: Falha na autenticação, tente novamente!
 *       '403':
 *         description: Confirme seu e-mail!
 */
