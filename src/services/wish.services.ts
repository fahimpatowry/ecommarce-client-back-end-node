import { Types } from "mongoose"
import Wish, { IWishItem } from "../models/wish.model"

export const getAllWishItems = async (userId: string) => {
    return await Wish.find({userId: new Types.ObjectId(userId) }).sort({ createdAt:  -1})
}

export const addNewWish = async (data: IWishItem) => {
    return await Wish.create({
        productIds: data.productIds.map(id => new Types.ObjectId(id)),
        quantity: data.quantity,
        userId: "63f1a2b4c5d6e7f8a9b0c1d2",
        // userId: data.userId
    })
}

export const updateOneWish = async (data: IWishItem) => {
    return await Wish.updateOne(
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

export const deleteOneWish = async (id: string) => {
    return await Wish.deleteOne({ _id: new Types.ObjectId(id)})
}
