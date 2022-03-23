import React, {useState, useEffect} from 'react';
import Brands from '../features/Brands';
import TopFeatureCard from '../features/TopFeatureCard';
import { motion } from 'framer-motion';
import style from "./Modules/Womens.module.scss"
import ItemContainer from '../ItemConrtainer/ItemContainer';
import SidePanel from '../SideSection/SidePanel';
export default function Womens() {
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

  return (
    <motion.section
    initial={{x:"10vw"}}
    animate={loadTransition ? {x:0}:{x:0}}>
      <TopFeatureCard page="womens" />
      <Brands />
      <section className={style.womens__store_container}>
        <SidePanel type='women'/>
        <ItemContainer type="women" />
      </section>
    </motion.section>
  );
}
