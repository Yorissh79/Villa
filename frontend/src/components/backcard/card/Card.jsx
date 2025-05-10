import React, {useEffect} from 'react'
import style from './Card.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {deleteProductThunk} from "../../../redux/reducers/productSlice.js";
import {deleteBasketThunk, getBasketThunk, postBasketThunk} from "../../../redux/reducers/basketSlice.js";
import {deleteWishlistThunk, getWishlistThunk, postWishlistThunk} from "../../../redux/reducers/wishlistSlice.js";

const Card = ({item, who}) => {

    const dispatch = useDispatch();
    const value_basket = useSelector((state) => state.basket.basket);
    const value_wish = useSelector((state) => state.wishlist.wishlist);

    useEffect(() => {
        dispatch(getBasketThunk());
        dispatch(getWishlistThunk());
    }, [])

    const deleteAdmin = () => {
        dispatch(deleteProductThunk(item._id))
    }
    const deleteWish = () => {
        dispatch(deleteWishlistThunk(item._id))
    }
    const deleteBasket = () => {
        dispatch(deleteBasketThunk(item._id))
    }
    const addToBasket = (object) => {
        dispatch(getBasketThunk())
        if (value_basket){
            const exist = value_basket.find((item) => item.name === object.name)

            if (!exist) {
                const data = {
                    name: object.name,
                    price: object.price,
                    description: object.description,
                    image: object.image,
                    count: "1"
                };
                dispatch(postBasketThunk(data));
            }

            else {
                const data = {
                    name: object.name,
                    price: object.price,
                    description: object.description,
                    image: object.image,
                    count: String(Number(exist.count) + 1)
                };
                dispatch(deleteBasketThunk(exist._id))
                dispatch(postBasketThunk(data));
            }
        }
    };

    const addToWish = (object) => {
        dispatch(getWishlistThunk())

        if (value_wish){
            const exist = value_wish.find((item) => item.name === object.name)

            if (!exist) {
                dispatch(postWishlistThunk(object));
            }
        }
    };


    return (
       <div className={style.main}>
           <img src={item.image} alt="" />
           <p className={style.f}>{item.name}</p>
           <p className={style.s}>{item.description}</p>
           <p className={style.t}>{item.price}</p>
           {who === "basket" ? <p className={style.c}>{item.count}</p> : null}

           {who === "home" ?  <div>
               <button onClick={() => {addToBasket(item)}} className={style.home}>Add to basket</button>
               <button onClick={() => {addToWish(item)}} className={style.home}>Add to wishlist</button>
           </div>: null}
           {who === "basket" ? <button onClick={() => {deleteBasket()}} className={style.bas}>Delete</button> : null}
           {who === "admin" ? <button onClick={() => {deleteAdmin()}} className={style.bas}>Delete</button> : null}
           {who === "wishlist" ? <button onClick={() => {deleteWish()}} className={style.bas}>Delete</button>  : null}
       </div>
    )
}

export default Card