import React, {useEffect} from 'react'
import style from './Admin.module.scss'
import {Helmet} from "react-helmet-async";
import BackCard from "../../components/backcard/BackCard.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getProductThunk} from "../../redux/reducers/productSlice.js";
import Form from "./Form/Form.jsx";

const Admin = () => {

    const dispatch = useDispatch();
    const data = useSelector(state => state.products.products);

    useEffect(() => {
        dispatch(getProductThunk())
    }, [])

    return (
       <div className={style.main}>
           <Helmet title="Admin" />
           <Form></Form>
           <BackCard data={data} who={"admin"}/>
       </div>
    )
}

export default Admin