import wishlistModel from "../models/wishlistModel.js";

const getWish = async (req, res) => {
    const wishlist = await wishlistModel.find()
    res.json(wishlist)
}

const postWish = async (req, res) => {
    const {name, price, image, description} = req.body
    const wishlist = {name, price, image, description}
    await wishlistModel.create(wishlist)
    res.json(wishlist)
}

const deleteWish = async (req, res) => {
    const {id} = req.params
    await wishlistModel.findByIdAndDelete(id)
    res.json(id)
}

export  {getWish, postWish, deleteWish}