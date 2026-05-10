import { Request, Response } from "express";
import {
  getAllProducts,
  getProductByCategory,
  getProductById,
  getProductByTag,
} from "../services/product.services";
import { getCategoryBySlug } from "../services/category.services";

export const fetchProducts = async (req: Request, res: Response) => {
  const { page, limit } = req.query;
  const skip = (Number(page || 0) - 1) * Number(limit || 10);

  try {
    const { data, total } = await getAllProducts(skip, Number(limit));

    res.status(200).json({
      success: true,
      data: data,
      pageInfo: {
        currentPage: Number(page),
        totalPages: Math.ceil(total / Number(limit)),
        totalItems: total,
      },
    });
  } catch {
    res.status(500).json({
      success: false,
      message: "Failed to fetch products",
    });
  }
};

export const fetchProductById = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (typeof id !== "string") {
    return res.status(400).json({
      success: false,
      message: "Invalid Product ID",
    });
  }

  try {
    const product = await getProductById(id);

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch {
    res.status(500).json({
      success: false,
      message: "Failed to fetch product",
    });
  }
};

export const fetchProductByCategoryId = async (req: Request, res: Response) => {
  const { categoryId } = req.params;

  const { productId, page, limit } = req.query;
  const skip = (Number(page || 0) - 1) * Number(limit || 10);

  if (typeof categoryId !== "string") {
    return res.status(400).json({
      success: false,
      message: "Invalid categoryId ID",
    });
  }

  try {
    const { data, total } = await getProductByCategory(
      categoryId,
      String(productId),
      skip,
      Number(limit)
    );

    res.status(200).json({
      success: true,
      data: data,
      pageInfo: {
        currentPage: Number(page),
        totalPages: Math.ceil(total / Number(limit)),
        totalItems: total,
      },
    });
  } catch {
    res.status(500).json({
      success: false,
      message: "Failed to fetch products by product",
    });
  }
};

export const fetchProductBySlug = async (req: Request, res: Response) => {
  const { slug } = req.params;

  const { page, limit } = req.query;
  const skip = (Number(page || 0) - 1) * Number(limit || 10);

  if (typeof slug !== "string") {
    return res.status(400).json({
      success: false,
      message: "Invalid slug ID",
    });
  }

  const category = await getCategoryBySlug(slug);

  if (!category) {
    return res.status(404).json({
      success: false,
      message: "Category not found",
    });
  }

  const categoryId = category[0]?.categoryId?.toString(); // Access categoryId directly

  if (!categoryId) {
    return res.status(404).json({
      success: false,
      message: "Category ID not found",
    });
  }

  try {
    const { data, total } = await getProductByCategory(
      categoryId,
      null,
      Number(skip),
      Number(limit)
    );

    res.status(200).json({
      success: true,
      data: data,
      pageInfo: {
        currentPage: Number(page),
        totalPages: Math.ceil(total / Number(limit)),
        totalItems: total,
      },
    });
  } catch {
    res.status(500).json({
      success: false,
      message: "Failed to fetch products by product",
    });
  }
};

export const fetchProductByTag = async (req: Request, res: Response) => {
  try {
    const { tag } = req.query;

    if (typeof tag !== "string") {
      return res.status(400).json({
        success: false,
        message: "Invalid tag",
      });
    }

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const { data, total } = await getProductByTag(tag, skip, Number(limit));

    res.status(200).json({
      success: true,
      data,
      pageInfo: {
        currentPage: page,
        totalPages: Math.ceil(total / limit),
        totalItems: total,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch products by coupon",
    });
  }
};
