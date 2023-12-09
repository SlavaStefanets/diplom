import React from 'react'
import style from './TitleGlobal.module.css'

export const TitleGlobal = ({title, color}) => {
  return (

    <h2 className={style.titleGlobal} style={{color: color}}>
      {title}
    </h2>
  )
}
