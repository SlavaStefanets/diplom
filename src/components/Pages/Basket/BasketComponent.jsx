import React from "react";
import { LitlButton } from "../../UI/LitlButton/LitlButton";
import { BasketItems } from "./BasketItems";
import { OrderDetails } from "./OrderDetails";
import { TitleGlobal } from "../../UI/TitleGlobal/TitleGlobal";
import style from "./BasketItem.module.css";
import { useState } from "react";
import { Button2 } from "../../UI/Button/Button2";
import { BasketPopup } from "../../../components/BasketPopup/BasketPopup";
import { useNavigate } from "react-router-dom";

export const BasketComponent = ({ basketItems, changeBasketItems }) => {
	const [popupOpen, setPopupOpen] = useState(false);

	function closePopup() {
		setPopupOpen(false);
	}

	const navigate = useNavigate();

	return (
		<div>
			{popupOpen && <BasketPopup closePopup={closePopup}></BasketPopup>}
			<div className={style.headerElements}>
				<TitleGlobal title="Shopping cart" color="black" />
				<div className={style.line}></div>
				<LitlButton text="Back to the store" path={"/"} btnBlack />
			</div>

			{JSON.parse(localStorage.getItem("basket"))?.length !== 0 ? (
				<div className={style.basketItemsOrderDetails}>
					<BasketItems
						basketItems={basketItems}
						changeBasketItems={changeBasketItems}
					></BasketItems>
					<OrderDetails popupOpen={popupOpen} setPopupOpen={setPopupOpen} />
				</div>
			) : (
				<div className={style.textAndButton}>
					<p className={style.litlText}>
						Looks like you have no items in your basket currently.
					</p>
					<Button2
						text="Continue Shopping"
						func={() => {
							navigate("/");
						}}
					/>
				</div>
			)}
		</div>
	);
};
