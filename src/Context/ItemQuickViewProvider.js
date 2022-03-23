import React, {useState} from 'react'
import { ShoesDataMen, ShoesDataWomen } from '../Data/ShoesData';
export const ItemQuickView = React.createContext();

export const ItemQuickViewProvider = ({children}) => {
   //useState to set the data 
   const [CurrentItem, setCurrentItem] = useState('')
   //useState to set the visible state of a popup module component
   const [OpenQuickView, setOpenQuickView] = useState(false)


   return (
      <ItemQuickView.Provider value={{ShoesDataMen, ShoesDataWomen, CurrentItem, setCurrentItem,OpenQuickView,setOpenQuickView}}>
         {children}
      </ItemQuickView.Provider>
   )
}