/**
 * @swagger
 * /v1/client/dashboard:
 *   get:
 *     tags:
 *       - Dashboard
 *     name: Empresas e Top Produtos
 *     summary: empresas e produtos mais vendidos da semana
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     responses:
 *       '200':
 *         description: retorna companies e topProducts.
 *       '403':
 *         description: Falha na busca, tente novamente!
 */

/**
 * @swagger
 * /v1/client/promotions:
 *   get:
 *     tags:
 *       - Dashboard
 *     name: Promoções
 *     summary: retorna os produtos que estão com desconto
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     responses:
 *       '200':
 *         description: retorna objeto products
 *       '403':
 *         description: Falha na busca, tente novamente!
 */
