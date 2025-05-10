import React, {useEffect} from 'react'
import style from './Home.module.scss'
import {Helmet} from "react-helmet-async";
import Fsection from "./components/fsection/Fsection.jsx";
import BackCard from "../../components/backcard/BackCard.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getProductThunk} from "../../redux/reducers/productSlice.js";

const Home = () => {

    const dispatch = useDispatch();
    const data = useSelector((state) => state.products.products);

    useEffect(() => {
        dispatch(getProductThunk())
    }, [])

    return (
       <div className={style.main}>
           <Helmet title="Home" />
            <Fsection />
           <BackCard data={data} who={"home"}/>
       </div>
    )
}

export default Home