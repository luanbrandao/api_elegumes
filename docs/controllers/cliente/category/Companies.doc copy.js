/**
 * @swagger
 * /v1/client/categories:
 *   get:
 *     tags:
 *       - Categorias
 *     name: Retorna as categorias e seus produtos
 *     summary: retorna as categorias
 *     description: retorna todas as categrias com 5 produtos ou com o valor informano no perpage
 *     parameters:
 *       - name: perpage
 *         in: query
 *         type: interge
 *         description: quantidade de produtos de cada categoria que serão retornados
 *     responses:
 *       '200':
 *         description: retorna { categories }.
 *       '400':
 *         description: Falha na requisição, tente novamente
 */
