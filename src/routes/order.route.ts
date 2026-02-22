import { Router } from "express";
import { addOrder, fetchOrders } from "../controllers/order.controller";

const route = Router();

/**
 * @swagger
 * /order:
 *   get:
 *     summary: Get all order items for a user
 *     description: Retrieve all order items associated with a specific user.
 *     tags:
 *       - Order
 *     parameters:
 *       - in: query
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user whose order items are being fetched.
 *     responses:
 *       200:
 *         description: Successfully retrieved order items
 *       400:
 *         description: Bad request (missing or invalid userId)
 *       500:
 *         description: Internal server error
 */
route.get("/", fetchOrders)

/**
 * @swagger
 * /order:
 *   post:
 *     summary: Add a new item to the order
 *     description: Adds a product or products to a user's order.
 *     tags:
 *       - Order
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 description: ID of the user
 *               productIds:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Array of product IDs to add
 *               quantity:
 *                 type: integer
 *                 description: Quantity of items to add
 *             required:
 *               - userId
 *               - productIds
 *               - quantity
 *     responses:
 *       201:
 *         description: order item successfully added
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 userId:
 *                   type: string
 *                 productIds:
 *                   type: array
 *                   items:
 *                     type: string
 *                 quantity:
 *                   type: integer
 *       400:
 *         description: Bad request (missing or invalid fields)
 *       500:
 *         description: Internal server error
 */
route.post("/", addOrder)

export default route;