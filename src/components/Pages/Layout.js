import React, {useState, useEffect} from 'react';
import Navbar from '../features/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../features/Footer';
import NavbarNotice from '../features/NavbarNotice';
import QuickView from '../features/QuickView';
// import { ItemQuickView } from '../../Context/ItemQuickViewProvider';
import style from './Modules/Layout.module.scss'
import { motion } from 'framer-motion';


export default function Layout(props) {
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
     initial={{opacity:0}}
     animate={loadTransition?{opacity: 1}:{opacity:1}}>
     <Navbar isDesktop={props.isDesktop} />
     <div className={style.outlet__container}>
     <NavbarNotice />
     <QuickView />
     <Outlet />
     <Footer />
     </div>
     </motion.section>
  );
}
