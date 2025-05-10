import React from 'react'
import style from './Fsection.module.scss'

const Fsection = () => {
    return (
       <div className={style.main}>
           <h1>Welcome to Villa resort</h1>
           <p>Discover our world-class hotel & restaurant resort.</p>
            <div className={style.btn}>
                <button className={style.f}>Explore the beauty</button>
                <button className={style.s}>Download</button>
            </div>
           <div className={style.overlay}>

           </div>
       </div>
    )
}

export default Fsection