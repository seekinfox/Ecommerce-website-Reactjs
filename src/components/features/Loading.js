import React, {useState, useEffect} from 'react'
import style from "./Modules/Loading.module.scss"
import loading from "../../Assets/Shared/loading.gif"
import { motion } from 'framer-motion'

export default function Loading() {
   const [loadTransition, setLoadTransition] = useState(true)
   useEffect(() => {
     const transition = setTimeout(() => {
        setLoadTransition(false)
     }, 500);
   
     return () => {
      clearTimeout(transition)
     }
   }, [])
   
  return (
    <motion.section 
    initial={{x:"10vw"}}
    animate={loadTransition ? {x:0}:{x:0}}
    className={style.loading__container}>
      <div className={style.loading__image_container}>
         <img src={loading} alt=""/>
      </div>
    </motion.section>
  )
}
