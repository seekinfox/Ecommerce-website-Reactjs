import React, {useState, useEffect} from 'react'
import { SeasonData } from './Data/FeaturesData'
import style from "./Modules/SeasonOffer.module.scss"
import { motion } from 'framer-motion'

export default function SeasonOffer() {
  const [slide, setSlide] = useState(0)
  useEffect(() => {
    const slider = setInterval(() => {
      slide <= -300 ? setSlide(0): setSlide(prev => prev - 100)
    }, 5000);
  
    return () => {
      clearInterval(slider)
    }
  }, [slide])
 


  
  
  return (
    <section className={style.so__container}>
       <div className={style.so__window}>
          {SeasonData.map(i => 
            <motion.div
            animate={{x:`${slide}vw`}}
            key={i.id} 
            className={style.so__card}>
              <img src={i.img} alt="" />
                <div className={style.so__info}>
                    <div>
                      <span>{i.title}</span>
                      <button className={i.season === "sw"? style.sw:i.season === "su"?style.su:i.season === "sp"?style.sp:i.season === "sr"?style.sr:""}>shop now</button>
                    </div>
                </div>
            </motion.div>  
          )}
       </div>
    </section>
  )
}
