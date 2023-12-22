import React from "react";
import style from "./ProductCard.module.css";
import { useNavigate } from "react-router-dom";
import { Button2 } from "../../UI/Button/Button2";

export const ProductCard = ({
	img,
	title,
	price,
	discont_price,
	id,
	visible,
}) => {
	const navigate = useNavigate();
	function discountProcent() {
		const dif = price - discont_price;
		const procent = (dif / price) * 100;
		return Math.round(procent);
	}
	const isSale = discont_price !== null;

	return (
		<div
			className={style.container}
			onClick={() => navigate("/products/" + id)}
		>
			{
				<div className={visible ? style.Button2 : style.btnFake}>
					<Button2
						text="Add to cart"
						func={() => {
							navigate("/products/" + id);
						}}
					/>
				</div>
			}
			{isSale && (
				<div className={style.procent}>
					<p style={{ display: "block" }}>-{discountProcent()}%</p>
				</div>
			)}
			<img className={style.photoImg} src={img} alt="categorie"></img>
			<div className={style.titlePlusPrice}>
				<h6> {title}</h6>
				<div className={style.allPrice}>
					{isSale && <p className={style.discountPrice}>${discont_price}</p>}
					<p className={isSale ? style.price : style.price2}>${price}</p>
				</div>
			</div>
		</div>
	);
};
