import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET_KEY;
const JWT_ExPIRATION = '1h';

type PayloadType = {
    id: any;
    email: string;
}

export const generateToken = (payload: PayloadType) => {
    return jwt.sign(payload, JWT_SECRET!, { expiresIn: JWT_ExPIRATION });
}

export const verifyToken = (token: string) => {
    return jwt.verify(token, JWT_SECRET!);
}
