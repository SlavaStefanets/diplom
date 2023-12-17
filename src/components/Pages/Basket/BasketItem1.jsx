import React from "react";
import style from "./BasketItem.module.css";

export const BasketItem1 = ({
	image,
	title,
	price,
	discont_price,
	id,
	count,
	changeCount,
	deleteItem,
}) => {
	const link = `https://telran-project-backend-y5gf.onrender.com`;
	return (
		<div className={style.container}>
			<div className={style.image}>
				<img src={`${link}${image}`}></img>
			</div>
			<div className={style.rightContainer}>
				<div className={style.titleButton}>
					<p className={style.title}>{title}</p>
					<button className={style.buttonDelite} onClick={() => deleteItem(id)}>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M18 6L6 18"
								stroke="#282828"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M6 6L18 18"
								stroke="#282828"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</button>
				</div>
				<div className={style.countPrice}>
					<div className={style.plusMinus}>
						<button onClick={() => changeCount(id, -1)}>-</button>
						<p>{count} </p>
						<button onClick={() => changeCount(id, +1)}>+</button>
					</div>
					<div className={style.discountPlusPrice}>
						<p className={style.price}>${price}</p>
						<p className={style.discontprice}>${discont_price}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
