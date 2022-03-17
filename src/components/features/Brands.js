import React from 'react'
import style from "./Modules/Brands.module.scss"
import { BrandImages } from './Data/FeaturesData'


export default function Brands() {
  return (
    <section className={style.brands__container}>
       {BrandImages.map((i, index) => 
         <div><img key={index} src={i} alt="logo" /></div>
       )}
    </section> 
  )
}
