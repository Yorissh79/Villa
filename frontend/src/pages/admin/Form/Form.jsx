import React from 'react'
import style from './Form.module.scss'
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {postProductThunk} from "../../../redux/reducers/productSlice.js";
import * as Yup from 'yup';

const Form = () => {

    const dispatch = useDispatch();

    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required").min(3, "Name must contain at least 6 characters"),
        price: Yup.string().required("Price is required").min(2, "Price must contain at least 6 characters"),
        description: Yup.string().required("Description is required").min(3, "Description must contain at least 6 characters"),
    })

    const formik = useFormik({
        initialValues: {
            name: "",
            price: "",
            description: "",
            image: "",
        },
        validationSchema,
        onSubmit: values => {
            dispatch(postProductThunk(values))
        },

    });

    return (

        <div className={style.main}>
            <form onSubmit={formik.handleSubmit}>

                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    {...formik.getFieldProps('name')}
                />
                <label htmlFor="price">Price</label>
                <input
                    id="price"
                    name="price"
                    type="text"
                    {...formik.getFieldProps('price')}
                />
                <label htmlFor="description">Description</label>
                <input
                    id="description"
                    name="description"
                    type="text"
                    {...formik.getFieldProps('description')}
                />
                <label htmlFor="image">Image</label>
                <input
                    id="image"
                    name="image"
                    type="text"
                    {...formik.getFieldProps('image')}
                />

                <button type="submit">Submit</button>

            </form>
        </div>


    );
}

export default Form