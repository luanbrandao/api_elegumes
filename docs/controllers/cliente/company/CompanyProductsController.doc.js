/**
 * @swagger
 * /v1/client/company/{id}/products:
 *   get:
 *     tags:
 *       - Empresa
 *     name: Retorna os produtos de uma empresa.
 *     summary: Retorna os produtos de uma empresa..
 *     description: Retorna os produtos de uma empresa com paginação.
 *     parameters:
 *       - name: id
 *         in: path
 *         type: string
 *         required:
 *         - id
 *         description: uuid da empresa
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
 *         description: retorna { data :{products} }.
 *       '400':
 *         description: Falha na requisição, tente novamente
 */
