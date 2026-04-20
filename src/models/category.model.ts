import mongoose, { Schema } from "mongoose";

export interface ICategory {
    name: string;
    slug: string;
    url?: string;
    categoryId?: number;
}

const CategorySchema = new Schema(
    {
        name: { type:String, required: true },
        slug: { type:String, required: true },
        url: { type:String, required: false },
        categoryId: { type:Number, required: true },
    },
    { timestamps:  { createdAt: "createAt", updatedAt: "updatedAt" }}
)

export default mongoose.model<ICategory>("Category", CategorySchema, "categorys");