import React from "react";
import style from './DiscountInfo.module.css'
import {Button} from '../UI/Button/Button'
import {Button2} from '../UI/Button/Button2'

export const DiscountInfo = () => {
	return (
		<div className={style.discountInfo}>
			<div>
				<h1 className={style.h1}>Amazing Discounts on Garden Products!</h1>
				<Button2 text="Add to cart" />
			</div>
		</div>
	);
};
