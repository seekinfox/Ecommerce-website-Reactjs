import React, {useState, useEffect} from 'react'
import Brands from '../features/Brands';
import SidePanel from '../SideSection/SidePanel';
import TopFeatureCard from '../features/TopFeatureCard';
import style from './Modules/Mens.module.scss'
import ItemContainer from '../ItemConrtainer/ItemContainer';
import { motion } from 'framer-motion'

export default function Mens() {
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
   
  return(
    <motion.section 
    initial={{x:"10vw"}}
    animate={loadTransition ? {x:0}:{x:0}}>
    <TopFeatureCard page="mens" />
    <Brands /> 
    <section className={style.mens__store_container}>
      <SidePanel type='men'/>
      <ItemContainer type="men" />
    </section>
    </motion.section>
  );
}
