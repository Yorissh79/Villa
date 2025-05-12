import React, {useState} from 'react'
import style from './BackCard.module.scss'
import Card from "./card/Card.jsx";

const BackCard = ({data, who}) => {

    const [searchText, setSearchText] = useState("")
    const [filterText, setFilterText] = useState("0")

    const filteredData = data?.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()))
        .sort((a, b) => {
            if (filterText === "asc") return Number(a.price) - Number(b.price)
            if (filterText === "desc") return Number(b.price) - Number(a.price)
            if (filterText === "0") return 0
        })

    return (
       <div className={style.main}>
           <div className={style.top}>
               <input placeholder={"Seacrh"} onChange={(e) => setSearchText(e.target.value)} />
               <div className={style.btn}>
                   <button onClick={() => setFilterText("asc")}>Az</button>
                   <button onClick={() => setFilterText("desc")}>Cox</button>
                   <button onClick={() => setFilterText("0")}>Default</button>
               </div>
           </div>

           <div className={style.cards}>
               {filteredData?.map((item) => <Card item={item} who={who}/>)}
           </div>
       </div>
    )
}

export default BackCard