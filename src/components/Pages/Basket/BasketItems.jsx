import React from "react";
import { BasketItem1 } from "./BasketItem1";

export const BasketItems = ({ refresh, changeBasketItems, basketItems }) => {
	function changeCount(id, diff) {
		const newArr = basketItems.map((elem) => {
			if (id === elem.id) {
				if (diff < 0 && elem.count === 0) return elem;

				return { ...elem, count: elem.count + diff };
			} else {
				return elem;
			}
		});
		changeBasketItems(newArr);

		localStorage.setItem("basket", JSON.stringify(newArr));
	}

	function deleteItem(id) {
		const newArr = basketItems.filter((elem) => {
			if (id == elem.id) {
				return false;
			}else{
				return true;
			}
		});

		changeBasketItems(newArr);
		localStorage.setItem("basket", JSON.stringify(newArr));
	}

	return (
		<div>
			{basketItems&&basketItems.map((el) => {
				return (
					<BasketItem1
						key={el.id}
						id={el.id}
						title={el.title}
						price={el.price}
						discont_price={el.discont_price}
						image={el.image}
						count={el.count}
						changeCount={changeCount}
						deleteItem={deleteItem}
					></BasketItem1>
				);
			})}
		</div>
	);
};
