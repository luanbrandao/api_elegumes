/**
 * @swagger
 * /v1/client/company/{id}:
 *   get:
 *     tags:
 *       - Company
 *     name: Retorna a empresa.
 *     summary: retorna a empresa.
 *     description: retorna todos os dados da empresa.
 *     parameters:
 *       - name: id
 *         in: path
 *         type: string
 *         required:
 *         - id
 *         description: uuid da empresa
 *     responses:
 *       '200':
 *         description: retorna { data :{company} }.
 *       '400':
 *         description: Falha na requisição, tente novamente
 */
