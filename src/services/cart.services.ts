import { Types } from "mongoose";
import Cart, { ICartItem } from "../models/cart.model";
import Product from "../models/product.model";

export const getAllCartItems = async (userId: string) => {
  let cardWithProduct = [];

  const cart = Cart.find({ userId: new Types.ObjectId(userId) }).sort({
    createdAt: -1,
  });

  for (const item of await cart) {
    const product = await Product.findById(item.productIds[0]);
    const total = item?.quantity * (product?.price || 0);

    const newProduct = {
      _id: item?._id,
      quantity: item?.quantity,
      item, // Convert the item to a plain object
      total,
      product,
    };
    cardWithProduct.push(newProduct);
  }

  return cardWithProduct;
};

export const addNewCart = async (data: ICartItem, userId: string) => {
  const { productIds, quantity } = data;
  
  let cart = await Cart.findOne({
    userId,
    productIds,
  });

  if (!cart) {
    return Cart.create({
      productIds: data.productIds.map((id) => new Types.ObjectId(id)),
      quantity: data.quantity,
      userId: userId,
    });
  } else {
    cart.quantity += quantity;
    await cart.save();
    return cart;

  }
};

export const updateOneCart = async (data: ICartItem) => {
  return await Cart.updateOne(
    { _id: data.cardId }, // filter
    {
      $set: {
        quantity: data.quantity,
        userId: data.userId,
      },
    }
  );
};

export const deleteOneCart = async (id: string) => {
  return await Cart.deleteOne({ _id: new Types.ObjectId(id) });
};
