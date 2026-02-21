import { Router } from "express";
import { addCart, deleteCart, fetchCarts, updateCart } from "../controllers/cart.countroller";

const route = Router();

/**
 * @swagger
 * /cart:
 *   get:
 *     summary: Get all cart items for a user
 *     description: Retrieve all cart items associated with a specific user.
 *     tags:
 *       - Cart
 *     parameters:
 *       - in: query
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user whose cart items are being fetched.
 *     responses:
 *       200:
 *         description: Successfully retrieved cart items
 *       400:
 *         description: Bad request (missing or invalid userId)
 *       500:
 *         description: Internal server error
 */
route.get("/", fetchCarts)

/**
 * @swagger
 * /cart:
 *   post:
 *     summary: Add a new item to the cart
 *     description: Adds a product or products to a user's cart.
 *     tags:
 *       - Cart
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
 *         description: Cart item successfully added
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
route.post("/", addCart)

/**
 * @swagger
 * /cart:
 *   put:
 *     summary: Update a user's cart item
 *     description: Update the product list or quantity of an existing cart for a user.
 *     tags:
 *       - Cart
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               _id:
 *                 type: string
 *                 description: ID of the cart item to update
 *               userId:
 *                 type: string
 *                 description: ID of the user
 *               productIds:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Updated array of product IDs
 *               quantity:
 *                 type: integer
 *                 description: Updated quantity
 *             required:
 *               - _id
 *               - userId
 *               - productIds
 *               - quantity
 *     responses:
 *       200:
 *         description: Cart item successfully updated
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
 *       404:
 *         description: Cart item not found
 *       500:
 *         description: Internal server error
 */
route.put("/", updateCart)

/**
 * @swagger
 * /cart:
 *   delete:
 *     summary: Delete a cart item
 *     description: Remove a specific cart item for a user.
 *     tags:
 *       - Cart
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the cart item to delete
 *       - in: query
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the user who owns the cart item
 *     responses:
 *       200:
 *         description: Cart item successfully deleted
 *       400:
 *         description: Bad request (missing or invalid cartId/userId)
 *       404:
 *         description: Cart item not found
 *       500:
 *         description: Internal server error
 */
route.delete("/", deleteCart)

export default route;