import React, { useState, useEffect } from "react";
import { BasketComponent } from "./BasketComponent";

export const BasketPage = () => {
	const [basketItems, setBasketItems] = useState([]);

	function changeBasketItems(arr) {
		setBasketItems(arr);
	}
	useEffect(() => {
		setBasketItems(JSON.parse(localStorage.getItem("basket")));
	}, []);
	return (
		<div>
			<BasketComponent
				basketItems={basketItems}
				changeBasketItems={changeBasketItems}
			></BasketComponent>
		</div>
	);
};
