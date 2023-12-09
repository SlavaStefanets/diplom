import React from 'react'
import style from './Button2.module.css'

export const Button2 = ({text,func}) => {
  return (
		<div>
			<button className={style.btn} onClick={func}>
				{text}
			</button>
		</div>
	);
}
