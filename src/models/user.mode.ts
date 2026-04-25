import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    required: false,
  },
  role: {
    type: String,
    enum: ["cr", "admin", "user"],
    required: false,
  },
  // age: {
  //   type: Number,
  // },
  phone: {
    type: String
  },
  address: {
    type: String,
  }

});

export default mongoose.model("User", userSchema);

