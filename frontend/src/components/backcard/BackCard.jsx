import React from 'react'
import style from './BackCard.module.scss'
import Card from "./card/Card.jsx";

const BackCard = ({data, who}) => {
    return (
       <div className={style.main}>
           {data?.map((item) => <Card item={item} who={who}/>)}
       </div>
    )
}

export default BackCard