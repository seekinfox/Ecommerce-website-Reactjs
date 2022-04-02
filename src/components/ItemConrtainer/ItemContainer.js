import React, {useContext} from 'react'
import Item from './Item'
import style from "./Module/ItemContainer.module.scss"
import { ItemQuickView } from '../../Context/ItemQuickViewProvider'
import { motion } from 'framer-motion'


export default function ItemContainer({type}) {

  const {ShoesDataMen, ShoesDataWomen} = useContext(ItemQuickView)

  return (
    <motion.div 
    layout 
    className={style.ic__container}>
      
      {/* taking in type prop if its men pass data for mens shoes else pass in Data for womens shoes */}

      {type === 'men' ? 
      <Item type={type} data={ShoesDataMen} /> :

      // passing men shoe data for testing 
      type === 'women' ?
      <Item type={type} data={ShoesDataWomen}/>
      :
      null
    } 
      
    </motion.div>

  )
}
