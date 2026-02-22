import { Router } from "express";
import { addWish, deleteWish, fetchWishes, updateWish } from "../controllers/wish.controller";

const route = Router();

/**
 * @swagger
 * /wish:
 *   get:
 *     summary: Get all wish items for a user
 *     description: Retrieve all wish items associated with a specific user.
 *     tags:
 *       - Wish
 *     parameters:
 *       - in: query
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user whose wish items are being fetched.
 *     responses:
 *       200:
 *         description: Successfully retrieved wish items
 *       400:
 *         description: Bad request (missing or invalid userId)
 *       500:
 *         description: Internal server error
 */
route.get("/", fetchWishes)

/**
 * @swagger
 * /wish:
 *   post:
 *     summary: Add a new item to the wish
 *     description: Adds a product or products to a user's wish.
 *     tags:
 *       - Wish
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
 *         description: Wish item successfully added
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
route.post("/", addWish)

/**
 * @swagger
 * /wish:
 *   put:
 *     summary: Update a user's wish item
 *     description: Update the product list or quantity of an existing wish for a user.
 *     tags:
 *       - Wish
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               _id:
 *                 type: string
 *                 description: ID of the wish item to update
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
 *         description: Wish item successfully updated
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
 *         description: wish item not found
 *       500:
 *         description: Internal server error
 */
route.put("/", updateWish)

/**
 * @swagger
 * /wish:
 *   delete:
 *     summary: Delete a wish item
 *     description: Remove a specific wish item for a user.
 *     tags:
 *       - Wish
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the wish item to delete
 *       - in: query
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the user who owns the wish item
 *     responses:
 *       200:
 *         description: Wish item successfully deleted
 *       400:
 *         description: Bad request (missing or invalid wishId/userId)
 *       404:
 *         description: Wish item not found
 *       500:
 *         description: Internal server error
 */
route.delete("/", deleteWish)

export default route;