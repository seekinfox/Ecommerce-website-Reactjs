import React from 'react';
import style from "./Modules/TopFeatureCard.module.scss"
import { HomeData, WomensData, MensData } from './Data/FeaturesData';

export default function TopFeatureCard(props) {
  return(
     <>
     {props.page === "home" ?
         <div className={style.tfc__container}>
               <div 
               className={`${style.tfc__content} ${style.tfc__Home_content}`}>
                  <h1>{HomeData.heading}</h1>
                  <p>{HomeData.p1}</p>
                  <p>{HomeData.p2}</p>

                  <div className={style.tfc__buttons}>
                     <button>{HomeData.b1}</button>
                     <button>{HomeData.b2}</button>
                     <button>{HomeData.b3}</button>
                  </div>
               </div>
              
               <div className={style.tfc__image}>
                     <img src={HomeData.img} alt={HomeData.img} />
               </div>
         </div>
         :
         ( props.page === "womens" ? 
         
         <div className={style.tfc__container}>
               <div 
               className={`${style.tfc__content} ${style.tfc__Women_content}`}>
                  <h1>{WomensData.heading}</h1>
                  <button>{WomensData.b}</button>
                  <p>{WomensData.p1}</p>
                  <p>{WomensData.p2}</p>
               </div>
               
               <div className={style.tfc__image}>
                     <img src={WomensData.img} alt={WomensData.img} />
               </div>
         </div>
         :
         
         ( props.page === "mens" ?
         
         <div className={style.tfc__container}>
         <div
         className={`${style.tfc__content} ${style.tfc__Men_content}`}>
            <h1>{MensData.heading}</h1>
            <button>{MensData.b}</button>
            <p>{MensData.p1}</p>
            <p>{MensData.p2}</p>
         </div>
         
         <div className={style.tfc__image}>
               <img src={MensData.img} alt={MensData.img} />
         </div>
         </div>
            :
            null
         )
         
         )
      }
     </>
  );
}
