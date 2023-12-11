import React from "react";
import style from "./ProductCard.module.css";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({ img, title, price, discont_price, id }) => {
	const navigate = useNavigate();
	function discountProcent() {
		const dif = price - discont_price;
		const procent = (dif / price) * 100;
		return Math.round(procent);
	}
	const isSale = discont_price !== null;
	return (
		<div
			onClick={() => navigate("/products/" + id)}
			className={style.container}
		>
			{isSale && <div className={style.procent}>
				<p style={{ display: 'block' }}>-{discountProcent()}%</p>
				
			</div>}
			<img className={style.photoImg} src={img} alt="categorie"></img>
			<div className={style.titlePlusPrice}>
				<h6> {title}</h6>
				<div className={style.allPrice}>
					{isSale && <p className={style.discountPrice}>${discont_price}</p>}
				    <p className={isSale && style.price}>${price}</p>
				</div>
			</div>
		</div>
	);
};
