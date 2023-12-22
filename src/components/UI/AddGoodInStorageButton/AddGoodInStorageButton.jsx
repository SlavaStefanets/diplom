import React from 'react'
import style from "./AddGoodStorageButton.module.css"



export const AddGoodInStorageButton = ({text}) => {

  function addGoodInStorage(productCount,dataProduct) {
		if (productCount < 1) {
			return;
		}
		let basket = localStorage.getItem("basket");

		if (basket) {
			basket = JSON.parse(basket);

			const existingProductIndex = basket.findIndex(
				(item) => item.id === dataProduct.id
			);

			if (existingProductIndex >= 0) {
				basket[existingProductIndex].count += productCount;
			} else {
				basket.push({ count: productCount, ...dataProduct });
			}
		} else {
			basket = [{ count: productCount, ...dataProduct }];
		}
		localStorage.setItem("basket", JSON.stringify(basket));
		console.log("BASKET", basket);
	}


	return (
		<div>
			<button onClick={() => addGoodInStorage()} className={style.btn}>
				{text}
			</button>
		</div>
	);
};
