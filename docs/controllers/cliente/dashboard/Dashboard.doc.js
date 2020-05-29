/**
 * @swagger
 * /v1/client/dashboard:
 *   get:
 *     tags:
 *       - Dashboard
 *     name: Dashboar
 *     summary: empresas e produtos mais vendidos da semana
 *     security:
 *       - bearerAuth: []
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
