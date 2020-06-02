/**
 * @swagger
 * /v1/client/search/companies:
 *   get:
 *     tags:
 *       - Pesquisa
 *     name: Pesquisa as empresas por nome com paginação
 *     summary: retorna as empresas
 *     description: faz uma busca pelo nome das empresas com filtro por nome e paginação
 *     parameters:
 *       - name: name
 *         in: query
 *         type: string
 *         description: parte do nome da empresa
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
