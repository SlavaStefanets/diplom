import React from "react";
import style from './DiscountInfo.module.css'
import {Button2} from '../UI/Button/Button2'
import { useNavigate } from "react-router-dom";

export const DiscountInfo = () => {
	const navigate = useNavigate();
	return (
		<div className={style.discountInfo}>
			<div>
				<h1 className={style.h1}>Amazing Discounts on Garden Products!</h1>
				<Button2 text="Check out" func={()=>{navigate ("/allsalespage")}}/>
			</div>
		</div>
	);
};
