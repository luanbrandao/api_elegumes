/**
 * @swagger
 * /v1/client/profile:
 *   put:
 *     tags:
 *       - Profile
 *     name: Atualização dos dados do cliente
 *     summary: Atualização dos dados do cliente
 *     description: se quiser atualizar a senha tem que passar os campos oldPassword, password e password_confirmation
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
 *             username:
 *               type: string
 *             phone:
 *               type: string
 *             birth:
 *               type: string
 *               format: date
 *             oldPassword:
 *               type: string
 *             password:
 *               type: string
 *             password_confirmation:
 *               type: string
 *         required:
 *     responses:
 *       '200':
 *         description: Retarna um objeto user.
 *       '400':
 *         description: Falha na validação do campos
 *       '500':
 *         description: Problema no servidor.
 */
