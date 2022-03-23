import React, {useState, useContext, useEffect} from 'react'

import { Link, useParams } from 'react-router-dom'
import { ItemQuickView } from '../../Context/ItemQuickViewProvider'
import style from "./Modules/ItemDetails.module.scss"
import { useMediaQuery } from 'react-responsive'
import {GoPrimitiveDot} from "react-icons/go"
import {SiAmazonpay} from 'react-icons/si'
import {AiFillStar} from 'react-icons/ai'
import {RiShoppingBag3Fill} from "react-icons/ri"
import { motion } from 'framer-motion'


const sizes = [5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13, 14, 15, 39, 40];

export default function ItemDetails() {
   //load transitions 
   const [loadTransition, setLoadTransition] = useState(true)
   useEffect(() => {
     const transition = setTimeout(() => {
        setLoadTransition(false)
     }, 500);
   
     return () => {
      clearTimeout(transition)
     }
   }, [])
   //media q. for desktop
   const isDesktop = useMediaQuery({
      query: '(min-width: 1224px)'
    })

   //taking shoes data from context
   //context is also give same data instance to the item container
   const {ShoesDataMen, ShoesDataWomen } = useContext(ItemQuickView)
   //getting and type string and id string from params
   const {type, id} = useParams()

   //filter params id that matches with the id present in shoes data and set it to the data

   const currrentDataMen = ShoesDataMen.filter((item) => item.id === id)
   const currrentDataWomen = ShoesDataWomen.filter((item)=> item.id === id)
   //console.log(ShoesDataMen)
   //handling data based on type
   const data = type==='men'? currrentDataMen : currrentDataWomen
   //console.log(data)

   const slideShowArray = [data[0].img1, data[0].img2, data[0].img3, data[0].img4];
   //main image state 
   const [bigImage, setBigImage] = useState(data[0].img1)

    const handleSetBigImage = (i) => {
      //console.log(i)
      setBigImage(i)
    }
   //console.log(slideShowArray)
   //start render can be reused  / item component
   const starsRenderer = (num) => {
      let starsArray = [];
      let star = <AiFillStar />
    
      for(let i = 1; i<= num; i++){
        starsArray.push(star)
      }
      return starsArray;
    }

   return (
      <motion.section 
      initial={{x:"10vw"}}
      animate={loadTransition ? {x:0}:{x:0}}
      className={style.itemDetails___container}>
         <div className={style.id__links_address}
         >
         <span>
            <Link to="/">Home</Link> / <Link to={type==="men"? '/mens':'/womens'}>{type==="men"? 'men': 'women'}</Link>
            </span> 
         </div>
         <div className={style.id__item_container}>
         <div className={style.id__images_container}>
            <div className={style.id__big_image}>
               <img src={bigImage} alt="" />
            </div>
            {isDesktop ? 
            <div className={style.id__small_images_container}>
               {slideShowArray.map((i, index) => 
                  <div key={index} className={style.id__small_image}>
                     <img src={i} alt="" onMouseOver={() => handleSetBigImage(i)} />
                  </div>
               )}
            </div> 
            : 
            <div className={style.id__buttons_container}>
               {slideShowArray.map((i, index) => 
                  <button key={index} onClick={() => handleSetBigImage(i)}><GoPrimitiveDot /></button>
               )}
            </div>
            }
         </div>
         <div className={style.id__item__details_container}>
            <h1>{data[0].brand}</h1>
            <h2>{data[0].subtitle}</h2>
            <span>INR {data[0].price}</span>
            <span>or 4 payments of <span>INR 2000</span> with <SiAmazonpay /></span>
            <div className={style.item__info_stars}>
              {starsRenderer(data[0].stars)}
              <span>{`(${data[0].totalRatingCount})`}</span>
            </div>
            <h3>size :</h3>
            <div className={style.id__sizes}>
               {sizes.map((i, index) => 
                  <div key={index} datatype={i}>{i}</div>
               )}
            </div>
            <h3> Delivery Method: </h3>
            <div className={style.id__delivery}>
               <label htmlFor="pod">
                  <input name='pay' id='pod' type="radio" />
                  <p>Ship to Address<span>Pay on Delivery</span><span>Most arriving in 4-7 business days, current carrier delays may extend time.</span></p>
               </label>
               <label htmlFor="pa">
                  <input name='pay' id='pa' type="radio" /> <p>Play online</p>
               </label>
            </div>
            <button>Add to cart <RiShoppingBag3Fill /></button>
         </div>
         </div>

         <div className={style.id__item_features}>
               <h3>Item details</h3>
               <h4>{data[0].detailsTitle}</h4>
               <ul>
               {data[0].details.map((i, index) => 
                  <li key={index}>{i}</li>
               )}
               </ul>
         </div>
      </motion.section>
  )
}
