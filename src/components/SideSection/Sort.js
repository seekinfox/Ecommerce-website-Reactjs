import React, {useState} from 'react'
import style from "./Modules/Sort.module.scss"
import {BiSort} from "react-icons/bi"

const sortItems = ['Featured', 'Top Rated', 'Newest',"price: Hight to Low", 'price: low to hight']
export default function Sort() {
   //open sort menu after click
   const [openSort, setOpenSort] = useState(false)
   //trigger handle sort after click on sort menu item
   // close the sort menu on item select
   
   const handleSort = () => {
      setOpenSort(false)
   }

  return (
   <div className={style.sp__sort}>
      <button onClick={() => setOpenSort(true)}>Sort <BiSort /></button>
      {openSort ? 
         <div className={style.sp__sort_list}>
         {sortItems.map((i,index) => 
            <p onClick={handleSort} datatype={i} key={index}>{i}</p>
         )}
      </div>: ""}
   </div>
   )
}
