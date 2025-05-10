import basketModel from "../models/basketModel.js";

const getBasket = async (req, res) => {
    const basket = await basketModel.find()
    res.json(basket)
}

const postBasket = async (req, res) => {
    const {name, price, image, description, count} = req.body
    const basket = {name, price, image, description, count}
    await basketModel.create(basket)
    res.json(basket)
}

const deleteBasket = async (req, res) => {
    const {id} = req.params
    await basketModel.findByIdAndDelete(id)
    res.json(id)
}

export  { getBasket, postBasket, deleteBasket }