import mongoose, { Document } from "mongoose"

export interface IProduct extends Document {
    url: string[];
    title: string;
    description: string;
    categoryID: mongoose.Types.ObjectId;
    price: number;
    orderCount: number;
    discount: number;
    tag: string;
    isPopular: boolean;
    createAt: Date;
    updatedAt: Date;
}

const ProductSchema = new mongoose.Schema(
    {
        url: { type: [String], required: true },
        title: { type: String, required: true },
        description: { type: String, required: true },
        categoryID: { 
            type: mongoose.Schema.Types.ObjectId, 
            required: true 
        },
        price: { type: Number, required: true },
        orderCount: { type: Number, default: 0 },
        discount: { type: Number, default: 0 },
        tag: { type: String, required: true },
        isPopular: { type: Boolean, default: false }
    },
    { timestamps: { createdAt: "createAt", updatedAt: "updatedAt" } }
)

export default mongoose.model<IProduct>("Product", ProductSchema, "products")