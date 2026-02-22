import mongoose, { Document, Schema, Types } from "mongoose";

export interface IWishItem extends Document  { 
    productIds: Types.ObjectId[];
    quantity: number;
    userId: Types.ObjectId;
}

const WishSchema = new Schema(
    {
        productIds: [{ type: Types.ObjectId, required: true }],
        quantity: { type: Number, required: true },
        userId: { type: Schema.Types.ObjectId, ref: "User", required: true }
    },
    { timestamps: { createdAt: "createAt", updatedAt: "updatedAt" } }
)

export default mongoose.model<IWishItem>("Wish", WishSchema, "wish")