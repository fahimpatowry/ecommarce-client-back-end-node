import { Request, Response } from "express";
import { getAllProducts } from "../services/product.services";

export const fetchProducts = async (req: Request, res: Response) => {   
    try{
        const products = await getAllProducts();

        res.status(200).json({
            success: true,
            data: products
        })
    }catch{
        res.status(500).json({
            success: false,
            message: "Failed to fetch products"
        })
    }            
}
