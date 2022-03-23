import React from 'react'
import style from "./Modules/Filter.module.scss"
import {BiFilter} from "react-icons/bi"
import {BsSearch} from "react-icons/bs"


const category = ['boots', 'clogs and mules', 'Loafers and oxfords', 'sandals', 'slipers', 'Sneakers', 'work and safety' ]

const brands = ['nike','Skechers','Converse','Vans','Crocs','adidas','ASICS','Baretraps','bates','Baretraps','Birkenstock','body-glove','Caterpillar', 'Chaco']

const colors = ['darkgoldenrod', 'darkred', 'black', 'gray', 'white', 'beige', 'lightskyblue', 'red', 'navy', 'yellow']

const sizes = [5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13, 14, 15, 39, 40];

export default function Filter({isDesktop}) {
  return (
   isDesktop ? 
   <div className={style.sp__filter_desktop}>
      <div className={style.sp__category}>
         <h3>Category</h3>
         {category.map((i, index) => 
            <p key={index} datatype={i}>{i}</p>
         )}
      </div>
      <div className={style.sp__brand}>
         <h3>brand</h3>
         <label htmlFor="search_brand">
            <input type="text" /><BsSearch />
         </label>
         <div className={style.sp__brand_list}>
            {brands.map((i, index) => 
               <label key={index} htmlFor={i}>
               <input id={i} type="checkbox" key={index} datatype={i} />{i}
               </label>
            )}
         </div>
         <div className={style.sp__color}>
               <h3>Color</h3>
               <div className={style.sp__color_list}>
                  {colors.map((i, index) => 
                     <label key={index} htmlFor={i}>
                        <input type="checkbox" id={i}/><span 
                        style={{backgroundColor: i}}>
                        </span>{i}
                     </label>
                  )}
               </div>
         </div>
         <div className={style.sp__size}>
               <h3>Size</h3>
               <div className={style.sp__size_list}>
                  {sizes.map((i, index) => 
                     <div className={style.sp__size_item} datatype={i} key={index}>
                        {i}
                     </div>
                  )}
               </div>
         </div>
      </div>
   </div>
   :
   <div className={style.sp__filter_mobile}>
      <button>Filter <BiFilter /></button>
   </div>
   )
}
