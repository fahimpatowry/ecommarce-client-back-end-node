import { Request, Response } from "express";
import { addNewWish, deleteOneWish, getAllWishItems, updateOneWish } from "../services/wish.services";


export const fetchWishes = async (req: Request, res: Response) => {
    const userId = req.query.userId as string;

    try{
        const wishes = await getAllWishItems(userId);

        res.status(200).json({
            success: true,
            data: wishes
        })
    }catch{
        res.status(500).json({
            success: false,
            message: "Failed to fetch wishes"
        })
    }
}

export const addWish = async (req: Request, res: Response) => {
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
        const newCart = await addNewWish(req.body);

        res.status(200).json({
            success: true,
            data: newCart
        })
    }catch{ 
        res.status(500).json({
            success: false,
            message: "Failed to add wish"
        })
    }
}

export const updateWish = async (req: Request, res: Response) => {
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
        const newCart = await updateOneWish(req.body);

        res.status(200).json({
            success: true,
            data: newCart
        })
    }catch{ 
        res.status(500).json({
            success: false,
            message: "Failed to add wish"
        })
    }
}

export const deleteWish = async (req: Request, res: Response) => {
    const id =  req.query.id as string;

    if (!id) {
        return res.status(400).json({
            success: false,
            message: "_id is required"
        });
    }else{
        try{
            const newCart = await deleteOneWish(id);

            res.status(200).json({
                success: true,
                data: newCart
            })
        }catch{ 
            res.status(500).json({
                success: false,
                message: "Failed to delete wish"
            })
        }
    }
}