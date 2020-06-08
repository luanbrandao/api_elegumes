/**
 * @swagger
 * /v1/client/categories/{id}/produts:
 *   get:
 *     tags:
 *       - Cetegorias
 *     name: Retorna as categorias e seus produtos
 *     summary: retorna as categorias
 *     description: retorna os produtos de uma categoria com paginação
 *     parameters:
 *       - name: id
 *         in: path
 *         type: string
 *         required:
 *         - id
 *         description: uuid da categoria
 *
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
 *         description: retorna { categories }.
 *       '400':
 *         description: Falha na requisição, tente novamente
 */
