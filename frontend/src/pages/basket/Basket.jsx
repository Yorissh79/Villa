import React, {useEffect} from 'react'
import style from './Basket.module.scss'
import {Helmet} from "react-helmet-async";
import BackCard from "../../components/backcard/BackCard.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getBasketThunk} from "../../redux/reducers/basketSlice.js";

const Basket = () => {

    const dispatch = useDispatch();
    const data = useSelector(state => state.basket.basket);

    useEffect(() => {
        dispatch(getBasketThunk());
    }, [])

    return (
       <div className={style.main}>
            <Helmet title="Basket" />
           <BackCard data={data} who={"basket"} />
       </div>
    )
}

export default Basket