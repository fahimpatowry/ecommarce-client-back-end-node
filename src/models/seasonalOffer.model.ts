import mongoose, { Document, Schema } from "mongoose";


export interface ISeasonalOffer extends Document {
    url: string;
    Slug: string;        // notice capital S
    isActive: boolean;
    position: number;
}

const SeasonalOfferSchema = new Schema({
    url: { type: String, required: true },
    Slug: { type: String, required: true },
    isActive: { type: Boolean, default: true },
    position: { type: Number, required: true }
    }, 
    { timestamps: true }
);

export default mongoose.model<ISeasonalOffer>("SeasonalOffer", SeasonalOfferSchema, "seasonalOffers");
