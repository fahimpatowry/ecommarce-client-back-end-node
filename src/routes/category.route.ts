import { Router } from "express";
import { fetchCategories } from "../controllers/category.controller";


const route = Router();

/**
 * @swagger
 * /categories:
 *   get:
 *    summary: Returns OK status
 *    responses:
 *      200:
 *       description: OK message
 */ 

route.get("/", fetchCategories)

export default route;