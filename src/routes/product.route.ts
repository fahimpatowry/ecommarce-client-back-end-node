import { Router } from "express";
import { fetchProducts } from "../controllers/product.controller";

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

export default router;