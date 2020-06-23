/**
 * @swagger
 * /v1/client/addresses:
 *   get:
 *     tags:
 *       - Endereços
 *     name: Lisgatem de todos os endereços do cliente
 *     summary: Lisgatem de todos os endereços do cliente
 *     description: Lisgatem de todos os endereços do cliente
 *     security:
 *       - bearerAuth: []
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     responses:
 *       '200':
 *         description: retorna { data  }.
 *       '400':
 *         description: Não foi possível buscar seus endereços!
 *       '500':
 *         description: Problema no servidor.
 */

/**
 * @swagger
 * /v1/client/addresses:
 *   post:
 *     tags:
 *       - Endereços
 *     name: Cadastro de novo endereço do cliente
 *     summary: Cadastro de novo endereço do cliente
 *     description: Cadastro de novo endereço do cliente
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
 *             description:
 *               type: string
 *             street:
 *               type: string
 *             cep:
 *               type: string
 *               minimum: 8
 *             neighborhood:
 *               type: string
 *             city:
 *               type: string
 *             state:
 *               type: string
 *             lat:
 *               type: string
 *             long:
 *               type: string
 *         required:
 *           - lat
 *           - long
 *
 *     responses:
 *       '200':
 *         description: retorna { data  }.
 *       '400':
 *         description: Não foi possível realizar sua avaliação!
 *       '500':
 *         description: Problema no servidor.
 */

/**
 * @swagger
 * /v1/client/addresses/{id}:
 *   put:
 *     tags:
 *       - Endereços
 *     name: Atualiza os dados do endereço do usuário
 *     summary: Atualiza os dados do endereço do usuário
 *     description: Cadastro de novo endereço do cliente
 *     security:
 *       - bearerAuth: []
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         type: string
 *         required:
 *         - id
 *       - name: body
 *         in: body
 *         schema:
 *           type: object
 *           properties:
 *             description:
 *               type: string
 *             street:
 *               type: string
 *             cep:
 *               type: string
 *               minimum: 8
 *             neighborhood:
 *               type: string
 *             city:
 *               type: string
 *             state:
 *               type: string
 *             lat:
 *               type: string
 *             long:
 *               type: string
 *         required:
 *           - lat
 *           - long
 *
 *
 *     responses:
 *       '200':
 *         description: retorna { data  }.
 *       '400':
 *         description: Não foi possível realizar sua avaliação!
 *       '500':
 *         description: Problema no servidor.
 */
