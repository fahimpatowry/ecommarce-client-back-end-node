import Carousel from "../models/carousel.model"

export const getAllCarousels = async () =>{
    return await Carousel.find()
    // return await Carousel.find({ isActive: true}).sort({ createdAt:  -1})
}

