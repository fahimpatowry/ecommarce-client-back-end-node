import User from "../models/user.mode";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/jwt";

type UserType = {
  name: string;
  email: string;
  password: string;
};

export const registerUser = async (data: UserType) => {
  const { name, email, password } = data;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    name,
    email,
    password: hashedPassword,
  });

  // const datas = await User.create(data);
  //set the user to db
  try {
    await user.save(); // Save user to the database
    return user; // Return the created user
  } catch (error) {
    throw new Error("Failed to save user to the database");
  }

  return user;
};

export const loginUser = async (data: any) => {
  const { email, password } = data;

  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  const token = generateToken({ id: user._id, email: user.email });

  return { user, token };
};
