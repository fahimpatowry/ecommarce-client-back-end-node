import { Request, Response } from "express";
import { addNewOrder, getAllOrders } from "../services/order.services";


export const fetchOrders = async (req: Request, res: Response) => {
    const userId = req.query.userId as string;

    try{
        const carts = await getAllOrders(userId);

        res.status(200).json({
            success: true,
            data: carts
        })
    }catch{
        res.status(500).json({
            success: false,
            message: "Failed to fetch orders"
        })
    }
}

export const addOrder = async (req: Request, res: Response) => {
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
        const newCart = await addNewOrder(req.body);

        res.status(200).json({
            success: true,
            data: newCart
        })
    }catch{ 
        res.status(500).json({
            success: false,
            message: "Failed to add order"
        })
    }
}