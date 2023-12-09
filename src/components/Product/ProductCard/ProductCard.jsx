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
	const isSale = (discont_price !== null)
	return (
		<div
			onClick={() => navigate("/products/" + id)}
			style={{ flexBasis: "25%", border: "1px solid" }}
		>
			<div>
				{(isSale === true) && <p>-{discountProcent()}%</p> }
			</div>
			<img className={style.photoImg} src={img} alt="categorie"></img>
			<h6> {title}</h6>
			<div className={style.allPrice}>
				<p className={style.discountPrice}>{discont_price}</p>
				<p className={style.price}>{price}</p>
			</div>
		</div>
	);
};
