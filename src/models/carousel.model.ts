import mongoose, { Schema, Document } from "mongoose";

export interface ICarousel extends Document {
  url: string;
  Slug: string;        // notice capital S
  isActive: boolean;
  createAt: Date;      // lowercase c
  updatedAt: Date;     // lowercase u
}

const CarouselSchema: Schema = new Schema(
  {
    url: { type: String, required: true },
    Slug: { type: String, required: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: { createdAt: "createAt", updatedAt: "updatedAt" } }
);

export default mongoose.model<ICarousel>("Carousel", CarouselSchema, "carousels");
