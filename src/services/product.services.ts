import mongoose from "mongoose";
import Product from "../models/product.model"

export const getAllProducts = async () => {
    return await Product.find()
}

export const getProductById = async (id: string) => {
    return await Product.findById(id);
}

export const getProductByCategory = async (categoryId: string) => {
    return await Product.find({ categoryId: Number(categoryId) }).sort({ createdAt: -1 });
}
