import { Request, Response } from "express";
import { getUser, updateUser } from "../services/user";

export const getUserProfile = async (req: Request, res: Response) => {
  const { user } = req as any;
  const userId = user.id as string;

  try {
    const user = await getUser(userId);

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch {
    res.status(500).json({
      success: false,
      message: "Failed to fetch user profile",
    });
  }
};

export const updateUserProfile = async (req: Request, res: Response) => {
  const { user } = req as any;
  const userId = user.id as string;
  const { name, email, phone, address, gender, role } = req.body;


  if (!name || name.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "Name is required",
    });
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Valid email is required",
    });
  }
  if (!phone || !/^01\d{9}$/.test(phone)) {
    return res.status(400).json({
      success: false,
      message: "Mobile must be 11 digits and start with 01",
    });
  }

  try {
    const data = await updateUser(userId,  req.body);
    if (!data) {
      res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "User profile updated successfully",
      });
    }
  } catch {
    res.status(500).json({
      success: false,
      message: "Failed to update user profile",
    });
  }
};
