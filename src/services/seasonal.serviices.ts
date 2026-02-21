import seasonalOfferModel from "../models/seasonalOffer.model"

export const getAllSeasonalOffer = async () => {
    return await seasonalOfferModel.find({ isActive: true, position:{ $gte: 1, $lte:3 } }).sort({ createdAt: -1 })
}
