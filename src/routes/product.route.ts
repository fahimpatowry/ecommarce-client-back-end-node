import { Router } from "express";
import { fetchProductByCategoryId, fetchProductById, fetchProductBySlug, fetchProductByTag, fetchProducts } from "../controllers/product.controller";

const router = Router();

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Returns a list of 
 *     tags:
 *       - Products
 *     parameters:
 *       - in: query
 *         name: page
 *         description: Page number
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *       - in: query
 *         name: limit
 *         description: Page Limit
 *         required: true
 *         schema: 
 *           type: number
 *           example: 10
 *     responses:
 *       200:
 *         description: Product list fetched successfully
 */
router.get("/", fetchProducts)

/**
 * @swagger
 * /products/product-by-tag:
 *   get:
 *     summary: Get products by  tag
 *     tags:
 *       - Products
 *     parameters:
 *       - in: query
 *         name: tag
 *         required: true
 *         description: tag
 *         schema:
 *           type: string
 *           example: dsd10
 *       - in: query
 *         name: page
 *         description: Page number
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *       - in: query
 *         name: limit
 *         description: Page limit
 *         required: true
 *         schema: 
 *           type: integer
 *           example: 10
 *     responses:
 *       200:
 *         description: Products fetched successfully
 *       404:
 *         description: Category not found
 */
router.get("/product-by-tag", fetchProductByTag)

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Get a product by ID
 *     tags:
 *       - Products
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
 *     tags:
 *       - Products
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

/**
 * @swagger
 * /products/product-by-slug/{slug}:
 *   get:
 *     summary: Get products by category slug
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         description: Category slug
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Products fetched successfully
 *       404:
 *         description: Category not found
 */
router.get("/product-by-slug/:slug", fetchProductBySlug)


export default router;