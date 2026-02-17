import { Request, Response } from "express";
import { getAllCarousels } from "../services/carousel.services"


export const fetchCarousels = async (req: Request, res: Response) => {
    try{
        const carousels = await getAllCarousels();

        res.status(200).json({
            success: true,
            data: carousels
        })
    }catch{
        res.status(500).json({
            success: false,
            message: "Failed to fetch carousels"
        })
    }
}
