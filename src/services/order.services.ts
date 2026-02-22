import { Types } from "mongoose"
import Order, { IOrderItem } from "../models/order.model"

export const getAllOrders = async (userId: string) => {
    return await Order.find({userId: new Types.ObjectId(userId) }).sort({ createdAt:  -1})
}

export const addNewOrder = async (data: IOrderItem) => {
    return await Order.create({
        productIds: data.productIds.map(id => new Types.ObjectId(id)),
        quantity: data.quantity,
        userId: "63f1a2b4c5d6e7f8a9b0c1d2",
        status: "pending"
        // userId: data.userId
    })
}