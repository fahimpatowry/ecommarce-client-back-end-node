import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET_KEY || "gYpOc787GngoqdHHIUbUeZgVyKTjNIXH9vsWVW94fPT";
const JWT_ExPIRATION = '8687768h';

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
