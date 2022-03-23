import React, {useState, useEffect} from 'react';
import Brands from '../features/Brands';
import SeasonOffer from '../features/SeasonOffer';
import TopFeatureCard from '../features/TopFeatureCard';
import { motion } from 'framer-motion';


export default function Home() {
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
      <TopFeatureCard page="home" />
      <Brands />
      <SeasonOffer />
     </motion.section>
  );
}
