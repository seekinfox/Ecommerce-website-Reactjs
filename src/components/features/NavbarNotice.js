import React from 'react'
import style from "./Modules/NavbarNotice.module.scss"
import {GrLocation} from "react-icons/gr"
import {BsSearch} from "react-icons/bs"
import { offersData } from './Data/FeaturesData'

export default function NavbarNotice() {
  return (
     <>
      <nav className={style.nn__navbar_container}>
         <div className={style.nn__search_nav}>
            <div className={style.nn__location_search}>
               <GrLocation /><span>find a store near you</span>
            </div>
            <div className={style.nn__search_input}>
               <label htmlFor="search">
                  <input  id="search" type="text" placeholder="Search for that shoe..."/>
                  <BsSearch />   
               </label>
            </div>
         </div>
         
         <div className={style.nn__offers}>
            {offersData.map((i, index) => 
               <div key={index} className={style.nn__offer_item}>
                  <span><strong>{i}</strong></span>
                  <a href="#">Shop Now</a>
               </div>
            )}
         </div>
      </nav>
     </>
  )
}
