import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  try {
    const mongoUri =
      process.env.MONGO_URI || "MONGO_URI=mongodb+srv://fahim:sd1@e-commerce-dev.zy6yq8r.mongodb.net/e%2Dcommerce?retryWrites=true&w=majority&appName=e-commerce-dev";

      console.log(mongoUri)

    await mongoose.connect(mongoUri);

    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection failed", error);
    process.exit(1);
  }
};

export default connectDB;
