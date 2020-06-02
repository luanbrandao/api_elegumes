/**
 * @swagger
 * /v1/client/search:
 *   get:
 *     tags:
 *       - Pesquisa por nome
 *     name: Pesquisa por produtos/empresas por nome
 *     summary: retorna os produtos/empresas
 *     description: faz uma busca pelo nome do produto/empresa, pode também informar a quantidade que quer ser retornada
 *     parameters:
 *       - name: name
 *         in: query
 *         type: string
 *         description: parte do nome produto/vendedor
 *       - name: perpage
 *         in: query
 *         type: interge
 *         description: qtd de valores no retorno
 *     responses:
 *       '200':
 *         description: retorna { products, companies }.
 *       '403':
 *         description: Falha na requisição, tente novamente
 */
