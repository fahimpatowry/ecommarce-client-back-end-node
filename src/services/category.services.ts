import Category from "../models/category.model"

export const getAllCategories = async () => {

    return await Category.find().sort({ createdAt: -1 })
}
