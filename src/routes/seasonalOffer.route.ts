import { Router } from "express";
import { fetchSeasonalOffers } from "../controllers/seasonalOffer.controller";


const route = Router();

/**
 * @swagger
 * /seasonal-offers:
 *  get:
 *    summary: Fetch all active seasonal 
 *    tags:
 *       - Seasonal offers
 *    responses:
 *      200:  
 *         description: A list of active seasonal offers
 */

route.get("/", fetchSeasonalOffers)


export default route;