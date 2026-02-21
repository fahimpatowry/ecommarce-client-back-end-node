import { Request, Response } from "express";
import { getAllCategories } from "../services/category.services";


export const fetchCategories = async (req: Request, res: Response) => {
    try{
        const categories = await getAllCategories();

        res.status(200).json({
          success: true,
          data: categories,
        });}catch{
        res.status(500).json({
            success: false,
            message: "Failed to fetch categories"
        })
    }
}
