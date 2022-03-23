import React from 'react'
import style from "./Modules/SidePanel.module.scss"
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import Sort from './Sort'
import Filter from './Filter'


export default function SidePanel({type}) {
//type prop will be a string 'men' or women
const isDesktop = useMediaQuery({
  query: '(min-width: 1224px)'
})
//media quary

  return (
    <section className={style.sp__container}>
      {/* nav for section marker */}

      <nav>
        <h2>{type}'s shoes</h2>
        <span>
          <Link to="/">Home </Link> / <Link to={type==='men'? '/mens' : '/womens'}> {type}</Link></span>
      </nav>
      <div className={style.sp__section2}>
        <Sort />
        <Filter isDesktop={isDesktop} />
      </div>
    </section>
  )
}
