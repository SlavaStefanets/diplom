import React from 'react'
import { LitlButton } from '../../UI/LitlButton/LitlButton'
import { BasketItems } from './BasketItems'
import {OrderDetails} from './OrderDetails'
import { TitleGlobal } from '../../UI/TitleGlobal/TitleGlobal'
import style from "./BasketItem.module.css"

export const BasketComponent = () => {
  return (
		<div>
			<div className={style.headerElements}>
				<TitleGlobal title="Shopping cart" color="black" />
				<div className={style.line}></div>
				<LitlButton text="Back to the store" path={"/"}></LitlButton>
			</div>
			<div className={style.basketItemsOrderDetails}>
				<BasketItems></BasketItems>
				<OrderDetails></OrderDetails>
			</div>
		</div>
	);
}
