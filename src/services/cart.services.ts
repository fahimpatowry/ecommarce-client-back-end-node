import { Types } from "mongoose"
import Cart, { ICartItem } from "../models/cart.model"

export const getAllCartItems = async (userId: string) => {
    return await Cart.find({userId: new Types.ObjectId(userId) }).sort({ createdAt:  -1})
}

export const addNewCart = async (data: ICartItem) => {
    console.log("object")
    return await Cart.create({
        productIds: data.productIds.map(id => new Types.ObjectId(id)),
        quantity: data.quantity,
        userId: "63f1a2b4c5d6e7f8a9b0c1d2",
        // userId: data.userId
    })
}

export const updateOneCart = async (data: ICartItem) => {
    return await Cart.updateOne(
        { _id: data._id }, // filter
        {
            $set: {
                productIds: data.productIds.map(id => new Types.ObjectId(id)),
                quantity: data.quantity,
                userId: data.userId
            }
        }
    )
}

export const deleteOneCart = async (id: string) => {
    return await Cart.deleteOne({ _id: new Types.ObjectId(id)})
}
