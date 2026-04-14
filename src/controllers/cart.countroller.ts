import { Request, Response } from "express";
import { addNewCart, deleteOneCart, getAllCartItems, updateOneCart } from "../services/cart.services";

export const fetchCarts = async (req: Request, res: Response) => {
    const userId = req.query.userId as string;

    try{
        const carts = await getAllCartItems(userId);

        res.status(200).json({
            success: true,
            data: carts
        })
    }catch{
        res.status(500).json({
            success: false,
            message: "Failed to fetch carts"
        })
    }
}

export const addCart = async (req: Request, res: Response) => {

    const { productIds, quantity } = req.body;
    const { user } = req as any;

    if (!user?.id) {
        return res.status(400).json({
            success: false,
            message: "userId is required"
        });
    }

    if (!productIds || !Array.isArray(productIds) || productIds.length === 0) {
        return res.status(400).json({
            success: false,
            message: "productIds must be a non-empty array"
        });
    }

    if (!quantity || typeof quantity !== "number" || quantity <= 0) {
        return res.status(400).json({
            success: false,
            message: "quantity must be a number greater than 0"
        });
    }

    try{
        const newCart = await addNewCart(req.body);

        res.status(200).json({
            success: true,
            data: newCart
        })
    }catch{ 
        res.status(500).json({
            success: false,
            message: "Failed to add cart"
        })
    }
}
export const updateCart = async (req: Request, res: Response) => {
    const { userId, productIds, quantity } = req.body;

    if (!userId) {
        return res.status(400).json({
            success: false,
            message: "userId is required"
        });
    }

    if (!productIds || !Array.isArray(productIds) || productIds.length === 0) {
        return res.status(400).json({
            success: false,
            message: "productIds must be a non-empty array"
        });
    }

    if (!quantity || typeof quantity !== "number" || quantity <= 0) {
        return res.status(400).json({
            success: false,
            message: "quantity must be a number greater than 0"
        });
    }

    try{
        const newCart = await updateOneCart(req.body);

        res.status(200).json({
            success: true,
            data: newCart
        })
    }catch{ 
        res.status(500).json({
            success: false,
            message: "Failed to add cart"
        })
    }
}

export const deleteCart = async (req: Request, res: Response) => {
    const id =  req.query.id as string;

    if (!id) {
        return res.status(400).json({
            success: false,
            message: "_id is required"
        });
    }else{
        try{
            const newCart = await deleteOneCart(id);

            res.status(200).json({
                success: true,
                data: newCart
            })
        }catch{ 
            res.status(500).json({
                success: false,
                message: "Failed to delete cart"
            })
        }
    }
}

