/**
 * @swagger
 * /v1/client/companies/sell/product_default/{id}:
 *   get:
 *     tags:
 *       - Empresa
 *     name: Retorna todas as empresas que vende certo produto
 *     summary: Retorna todas as empresas que vende certo produto
 *     description: Retorna todas as empresas que vende esse produto.
 *     parameters:
 *       - name: id
 *         in: path
 *         type: string
 *         required:
 *         - id
 *         description: uuid do produto_default
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
 *         description: retorna { data }.
 *       '400':
 *         description: Falha na requisição, tente novamente
 */
