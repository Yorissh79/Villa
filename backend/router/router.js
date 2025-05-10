import express from 'express';
import {getProduct, postProduct, deleteProduct} from "../controllers/productController.js";
import {deleteBasket, getBasket, postBasket} from "../controllers/basketController.js";
import {deleteWish, getWish, postWish} from "../controllers/wishlistController.js";

const router = express.Router();

router
    .get("/products", getProduct)
    .post("/products", postProduct)
    .delete("/products/:id", deleteProduct)

    .get("/basket", getBasket)
    .post("/basket", postBasket)
    .delete("/basket/:id", deleteBasket)

    .get("/wishlist", getWish)
    .post("/wishlist", postWish)
    .delete("/wishlist/:id", deleteWish)

export default router;