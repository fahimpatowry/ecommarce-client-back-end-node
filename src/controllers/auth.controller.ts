import { Request, Response } from "express";
import { loginUser, registerUser } from "../services/auth.services";

export const register = async (req: Request, res: Response) => {
  try {
    const user = await registerUser(req.body);

    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(400).json({ message: "Server error" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { user, token } = await loginUser(req.body);

    res.status(200).json({
      success: true,
      data: {
        user,
        token,
      },
    });
  } catch (error) {
    res.status(400).json({ message: "Server error" });
  }
};

export const logout = (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        message: "Logged out successfully"
    });
}
