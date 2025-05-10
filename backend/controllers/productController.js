import productModel from "../models/productModel.js";

const getProduct = async (req, res) => {
    const product = await productModel.find();
    res.json(product);
}

const postProduct = async (req, res) => {
    const {name, price, image, description} = req.body;
    const product = {name, price, image, description}
    await productModel.create(product)
    res.json(product);
}

const deleteProduct = async (req, res) => {
    const {id} = req.params;
    await productModel.findByIdAndDelete(id)
    res.json(id)
}

export  {getProduct, postProduct, deleteProduct}