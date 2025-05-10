import mongoose from "mongoose";

const basketSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: String, required: true},
    image: {type: String, required: true},
    description: {type: String, required: true},
    count: {type: String, required: true},
})

const basket = mongoose.model('basket', basketSchema);
export default basket;