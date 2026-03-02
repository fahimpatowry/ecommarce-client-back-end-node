import { Router } from "express";
import { fetchProductByCategoryId, fetchProductById, fetchProducts } from "../controllers/product.controller";

const router = Router();

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Returns a list of products
 *     responses:
 *       200:
 *         description: Product list fetched successfully
 */

router.get("/", fetchProducts)

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Get a product by ID
 *     parameters: 
 *          - in: path
 *            name: id
 *            description: Product ID
 *            schema: 
 *              type: string
 *     responses:
 *       200:
 *         description: Product fetched successfully
 *       404:
 *         description: Product not found
 */
router.get("/:id", fetchProductById)

/**
 * @swagger
 * /products/similar-products/{categoryId}:
 *   get:
 *     summary: Get products by category ID
 *     parameters:
 *       - in: path
 *         name: categoryId
 *         required: true
 *         description: Category ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Products fetched successfully
 *       404:
 *         description: Category not found
 */
router.get("/similar-products/:categoryId", fetchProductByCategoryId)

export default router;