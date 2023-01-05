const express = require('express');
import productsController from '../../controllers/products.controller';

const router = express.Router();

router
  .route('/')
  .get(productsController.getProducts);

export default router;

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Retrieve product catalog
 */

/**
 * @swagger
 * /v1/api/products:
 *   get:
 *     summary: Get all products matching business logic
 *     description: Get all products with its details.
 *     tags: [Products]
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Products'
 */
