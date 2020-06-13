/**
 * @swagger
 * /v1/client/announcements:
 *   get:
 *     tags:
 *       - Dashboard
 *     name: Anúncios tela principal
 *     summary: Anúncios pela principal
 *     description: retorna todos os anúncios ativos e que não expiraram
 *     parameters:
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
 *         description: retorna { data {} }.
 *       '400':
 *         description: Falha na requisição, tente novamente
 */
