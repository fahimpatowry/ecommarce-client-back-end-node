import Product from "../models/product.model"

export const getAllProducts = async () => {
    return await Product.find()
}
