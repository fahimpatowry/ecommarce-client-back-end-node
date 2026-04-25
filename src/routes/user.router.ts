import { getUserProfile, updateUserProfile } from "../controllers/user.router";

const route = require("express").Router();

/**
 * @swagger
 *  /user:
 *  get:
 *     summary: Get user profile
 *     tags: [User]
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       201:
 *          description: User profile fetched successfully
 */
route.get("/", getUserProfile);

/**
 * @swagger
 *  /user:
 *  put:
 *     summary: update user profile
 *     tags: [User]
 *     security:
 *      - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *              schema:
 *               type: object
 *               properties:
 *                name:
 *                  type: string
 *                  description: User's name
 *                email:
 *                  type: string
 *                  description: User's
 *                phone:
 *                   type: string
 *                   description: User's phone number (11 digits, starts with 01)
 *                address:
 *                   type: string
 *                   description: User's address
 *                gender:
 *                   type: string
 *                   description: "Male / Female"
 *                role:
 *                   type: string
 *                   description: "User role (cr, admin, user)"
 *               required:
 *                - email
 *                - name
 *                - role
 *     responses:
 *       201:
 *          description: User profile update successfully
 */
route.put("/", updateUserProfile);

export default route;
