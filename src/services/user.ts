import User from "../models/user.mode";

export const getUser = async (userId: string) => {
  const userData = await User.findById(userId).select("-password -_id -__v");

  return userData;
};

export const updateUser = async (userId: string, body: any) => {
  const { email } = body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    const userData = await User.updateOne(
      { _id: userId },
      {
        $set: body,
      }
    );

    return userData;
  }

  return existingUser;
};
