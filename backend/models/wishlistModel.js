import mongoose from "mongoose";
import basketModel from "./basketModel.js";

const wishlistSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: String, required: true},
    image: {type: String, required: true},
    description: {type: String, required: true}
})

const wishlist = mongoose.model('wishlist', wishlistSchema);
export default wishlist;