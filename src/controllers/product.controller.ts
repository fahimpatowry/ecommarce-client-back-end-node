import { Request, Response } from "express";
import { getAllProducts, getProductByCategory, getProductById } from "../services/product.services";

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

export const fetchProductById = async (req: Request, res: Response) => {   

    const { id } = req.params;

    if (typeof id !== "string") {
        return res.status(400).json({
            success: false,
            message: "Invalid Product ID"
        });
    }

    try{
        const product = await getProductById(id);

        res.status(200).json({
            success: true,
            data: product
        })
    }catch{
        res.status(500).json({
            success: false,
            message: "Failed to fetch product"
        })
    }            
}

export const fetchProductByCategoryId = async (req: Request, res: Response) => {   

    const { categoryId } = req.params;

    if (typeof categoryId !== "string") {
        return res.status(400).json({
            success: false,
            message: "Invalid categoryId ID"
        });
    }
    
    try{
        const product = await getProductByCategory(categoryId);

        res.status(200).json({
            success: true,
            data: product
        })
    }catch{
        res.status(500).json({
            success: false,
            message: "Failed to fetch products by category"
        })
    }            
}
