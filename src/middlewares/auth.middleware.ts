import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";

export interface AuthRequest extends Request {
  user?: any;
}

export const protect = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(401).json({ message: "No token provided" });
        }

        const decoded = verifyToken(token);
        req.user = decoded;

        next();
    }catch (error) {
        res.status(401).json({
            success: false,
            message: "Unauthorized"
        });
    }
}

