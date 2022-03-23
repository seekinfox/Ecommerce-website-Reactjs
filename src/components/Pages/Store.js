import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';
export default function Store() {
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
      store

    </motion.section>
  );
}
