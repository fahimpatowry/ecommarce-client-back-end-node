import { Router } from "express";
import { fetchCarousels } from "../controllers/carousel.controller";


const router = Router();

/**
 * @swagger
 * /carousel:
 *   get:
 *     summary: Returns OK status
 *     tags:
 *       - Carousel
 *     responses:
 *       200:
 *         description: OK message
 */
router.get("/", fetchCarousels)

export default router;
