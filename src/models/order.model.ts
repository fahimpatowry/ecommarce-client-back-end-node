import mongoose, { Schema, Types } from "mongoose";

export interface IOrderItem extends Document {
    productIds: Types.ObjectId[];
    quantity: number;
    userId: Types.ObjectId;
    status: "pending" | "shipped" | "delivered" | "cancelled";
}

const OrderSchema = new Schema(
    {
        productIds: [{ type: Types.ObjectId, required: true }],
        quantity: { type: Number, required: true },
        userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
        status: { type: String, enum: ["pending", "shipped", "delivered", "cancelled"], default: "pending" }
    },
    { 
        timestamps: { createdAt: "createAt", updatedAt: "updatedAt" }     
    }
)

export default mongoose.model<IOrderItem>("Order", OrderSchema, "orders")
