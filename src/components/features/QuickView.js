import React, {useState ,useContext} from 'react'
import style from "./Modules/QuickView.module.scss"
import { ItemQuickView } from '../../Context/ItemQuickViewProvider'
import { motion } from 'framer-motion'
import {FiChevronLeft, FiChevronRight} from "react-icons/fi"

export default function QuickView() {
  //getting data from context ItemQuickView

  const {CurrentItem, OpenQuickView, setOpenQuickView} = useContext(ItemQuickView)

  //to close the popup module if the target the out box
  const handleCloseModule = (e) => {
    if(e.target.classList.contains('qv__popup_handle')){
      setOpenQuickView(false)
    }
  }

  //slider array
  const ImageSliderArray = [CurrentItem.img1,CurrentItem.img2,CurrentItem.img3,CurrentItem.img4]
  //slider state 
  const [slide, setSlide] = useState(0)
  //left and right arrow handles 
  const handleLeft = () => {
    if(slide <= 0){
      setSlide(ImageSliderArray.length-1)
    }
    setSlide(prev => prev - 1)
  }
  const handleRight = () => {
    setSlide(prev => prev + 1)
    if(slide >= ImageSliderArray.length -1){
      setSlide(0)
    }
  }



  return (
    <motion.section 
    initial={{opacity: 0}}
    animate={OpenQuickView? {opacity: 1,x:0}: {display:'none'}}
    className={`qv__popup_handle ${style.qv__popup_container}`} onClick={(e) => handleCloseModule(e)}>
      <div className={style.qv__image_container}>
         <img src={ImageSliderArray[slide]} />
      </div>
      <div className={style.qv__arrows}>
        <button onClick={() => handleLeft()}><FiChevronLeft /></button>
        <button onClick={() => handleRight()}><FiChevronRight /></button>
      </div>
    </motion.section>
  )
}
