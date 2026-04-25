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
 *     responses:
 *       201: 
 *          description: User profile update successfully
 */
route.put("/", updateUserProfile);

export default route;
