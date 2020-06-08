/**
 * @swagger
 * /v1/auth/client/register:
 *   post:
 *     tags:
 *       - Auth
 *     name: Cadastro de Cliente
 *     summary: cadastra um novo usuário no sistema
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
 *             username:
 *               type: string
 *             email:
 *               type: string
 *             password:
 *               type: string
 *             password_confirmation:
 *               type: string
 *             phone:
 *               type: string
 *             birth:
 *               type: string
 *               format: date
 *         required:
 *           - username
 *           - email
 *           - password
 *           - password_confirmation
 *           - phone
 *     responses:
 *       '200':
 *         description: Retarna um objeto user.
 *       '400':
 *         description: Falha na validação do campos
 *       '500':
 *         description: Problema no servidor.
 */
