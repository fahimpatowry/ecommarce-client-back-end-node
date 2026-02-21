import { Request, Response } from "express";
import { getAllSeasonalOffer } from "../services/seasonal.serviices";


export const fetchSeasonalOffers = async (req: Request, res: Response) => {
    try{
        const seasonalOffers = await getAllSeasonalOffer();

        res.status(200).json({
            success: true,
            data: seasonalOffers
        })
    }catch{
        res.status(500).json({
            success: false,
            message: "Failed to fetch seasonal offers"
        })
    }
}