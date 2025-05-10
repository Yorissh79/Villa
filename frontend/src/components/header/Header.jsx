import React from 'react'
import style from './Header.module.scss'
import {SlMenu} from "react-icons/sl";
import {Link} from "react-router";

const Header = () => {
    return (
       <div className={style.main}>
            <p>Villa</p>
            <SlMenu fontSize={"2rem"}/>
           <Link to="/admin">Admin</Link>
           <Link to="/basket">Basket</Link>
           <Link to="/wishlist">Wishlist</Link>
       </div>
    )
}

export default Header