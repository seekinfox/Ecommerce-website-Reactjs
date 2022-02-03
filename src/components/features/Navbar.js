import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai";
import logo from "../../Assets/Shared/logo512.png";
import style from "./Modules/Navbar.module.scss";



export default function Navbar(props) {
   const [openNav, setOpenNav] = useState(false)
   const location = useLocation();
   const { pathname } = location;
   const splitLocation = pathname.split("/");
   const handleNavOpen = () => {
      setOpenNav(true)
   } 
   const handleNavClose = (e) => {
      if(e.target.classList.contains('mn')){
         setOpenNav(false)
      }
   }


  return (
     <>
      <section className={style.navbarSection}>
         <div className={style.logo}>
            {props.isDesktop ? "": <AiOutlineMenu onClick={handleNavOpen} className={style.menuIcon} />}
            <img src={logo} alt="ReactLogo" /> <span>Lorem Store</span>
         </div>
         {props.isDesktop ? 
         <nav className={style.nav}>
            <Link className={`${style.link} ${splitLocation[1] === "" ? style.active : ""}`} to="/"><p>Home</p></Link>
            <Link className={`${style.link} ${splitLocation[1] === "store" ? style.active : ""}`} to="/store"><p>Store</p></Link>
            <Link className={`${style.link} ${splitLocation[1] === "womens" ? style.active : ""}`} to="/womens"><p>Womens</p></Link>
            <Link className={`${style.link} ${splitLocation[1] === "mens" ? style.active : ""}`} to="/mens"><p>Mens</p></Link>
            <Link className={`${style.link} ${splitLocation[1] === "login" ? style.active : ""}`} to="/login"><p>Login</p></Link>
            <div className={style.cart}>
               <AiOutlineShoppingCart className={style.icon} />
            </div>
         </nav>
         :
         <>
            {openNav ? 
            <div className={`mn ${style.mobileNavContainer}`} onClick={handleNavClose}>
               <nav className={`${style.Mnav} ${openNav ? style.open : "" }`}>
                  <Link className={`${style.Mlink} ${splitLocation[1] ===   "" ? style.active : ""}`} to="/"><p>Home</p></Link>
                  <Link className={`${style.Mlink} ${splitLocation[1] === "store" ? style.active : ""}`} to="/store"><p>Store</p></Link>
                  <Link className={`${style.Mlink} ${splitLocation[1] === "womens" ? style.active : ""}`} to="/womens"><p>Womens</p></Link>
                  <Link className={`${style.Mlink} ${splitLocation[1] === "mens" ? style.active : ""}`} to="/mens"><p>Mens</p></Link>
                  <Link className={`${style.Mlink} ${splitLocation[1] === "login" ? style.active : ""}`} to="/login"><p>Login</p></Link>
                  <div className={style.Mcart}>
                     <AiOutlineShoppingCart className={style.icon} />
                  </div>
               </nav>
            </div>
            :
            ""
            }
         </>
         }
      </section>     
     </>
  )
}