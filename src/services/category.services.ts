import Category from "../models/category.model"

export const getAllCategories = async () => {

    return await Category.find().sort({ createdAt: -1 })
}

export const getCategoryBySlug = async (slug: string) => {

    return await Category.find({slug: slug}).sort({ createdAt: -1})
}
