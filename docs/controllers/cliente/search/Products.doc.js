/**
 * @swagger
 * /v1/client/search/products:
 *   get:
 *     tags:
 *       - Pesquisa
 *     name: Pesquisa os produtos por nome com paginação
 *     summary: retorna os produtos
 *     description: faz uma busca pelo nome do produto com filtro por nome e paginação
 *     parameters:
 *       - name: name
 *         in: query
 *         type: string
 *         description: parte do nome produto/vendedor
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
 *         description: retorna { products }.
 *       '400':
 *         description: Falha na requisição, tente novamente
 */
