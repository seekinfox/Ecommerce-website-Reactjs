import React, {useContext} from 'react'
import style from "./Module/Item.module.scss"
import {AiFillStar} from "react-icons/ai"
import { ItemQuickView } from '../../Context/ItemQuickViewProvider'
import { Link } from 'react-router-dom'

// function to render stars rating
//takes in stars from data in num var and loops through it, on every loop it pushes the star jSX into the star Array

const starsRenderer = (num) => {
  let starsArray = [];
  let star = <AiFillStar />

  for(let i = 1; i<= num; i++){
    starsArray.push(star)
  }
  return starsArray;
}

export default function Item({type, data}) {
  const {setCurrentItem ,setOpenQuickView} = useContext(ItemQuickView)

  const handleQuickView = (data) => {
    setOpenQuickView(prev => !prev)
    setCurrentItem(data)
    // console.log(data)
  }

  return (
      data.map((data) => 
        <div key={data.id} className={style.item__container}>
          <Link to={`/${type}/${data.id}`} >
          <div className={style.item__image}>
            <img src={data.img1} alt={data.subtitle} />
          </div></Link>
          <div className={style.item__info}>
          <Link to={`/${data.id}`} ><h4>{data.brand}</h4></Link>
            <h5>{data.subtitle}</h5>
            <span>INR {data.price}</span>
            <div className={style.item__info_stars}>
              {starsRenderer(data.stars)}
              <span>{`(${data.totalRatingCount})`}</span>
            </div>
            <button onClick={() => handleQuickView(data)}>Quick view</button>
          </div>
        </div>
      )
  )
}
