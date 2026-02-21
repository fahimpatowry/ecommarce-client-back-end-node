import mongoose, { Schema } from "mongoose";

export interface ICategory {
    name: string;
    slug: string;
    url?: string;
    categoryId?: string;
}

const CategorySchema = new Schema(
    {
        name: { type:String, required: true },
        slug: { type:String, required: true },
        url: { type:String, required: false },
        categoryId: { type:String, required: true },
    },
    { timestamps:  { createdAt: "createAt", updatedAt: "updatedAt" }}
)

export default mongoose.model<ICategory>("Category", CategorySchema, "categorys");