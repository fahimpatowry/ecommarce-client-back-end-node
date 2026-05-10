import Product from "../models/product.model";

export const getAllProducts = async (skip: number, limit: number) => {
  const data = await Product.find()
    .skip(skip || 0)
    .limit(limit || 10)
    .sort({ createdAt: -1 });
  const total = await Product.countDocuments();
  return { data, total };
};

export const getProductById = async (id: string) => {
  return await Product.findById(id);
};

export const getProductByCategory = async (
  categoryId: string,
  productId: any,
  skip: number,
  limit: number
) => {
  let data = [];
  if (productId) {
    data = await Product.find({
      categoryId: Number(categoryId),
      _id: productId,
    })
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });
  }else{
    data = await Product.find({
      categoryId: Number(categoryId),
    })
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });
  }
  const total = await Product.countDocuments({
    categoryId: Number(categoryId),
  });
  return { data, total };
};

export const getProductByTag = async (
  tag: string,
  skip: number,
  limit: number
) => {
  let data : any = [];
  
  if (tag) {
    data = await Product.find({
      tag: tag,
    })
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });
  }else{
    data = []
  }

  const total = await Product.countDocuments({
    categoryId: Number(tag),
  });
  return { data, total };
};
