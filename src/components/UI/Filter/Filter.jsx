import React from "react";
import style from "./Filter.module.css";

export const Filter = ({ saveFunc, copyArr }) => {
	function filtration(inputValues) {
		saveFunc(copyArr, copyArr);
		let newArr = copyArr.slice();
		console.log("array3", newArr);
		if (inputValues.priceTo)
			newArr = newArr.filter((el) => el.price < Number(inputValues.priceTo));

		if (inputValues.priceFrom)
			newArr = newArr.filter((el) => el.price > Number(inputValues.priceFrom));

		if (inputValues.isOnlySale)
			newArr = newArr.filter((el) => el.discont_price);

		if (inputValues.sortType)
			switch (inputValues.sortType) {
				case "by default":
					newArr.sort((a, b) => {
						if (a.title < b.title) return 1;
						if (a.title > b.title) return -1;
						if (a.title === b.title) return 0;
					});
					break;
				case "newest":
					newArr.sort((a, b) => {
						const a2 = new Date(a.updatedAt);
						const b2 = new Date(b.updatedAt);
						return a2.getTime() - b2.getTime();
					});
					break;
				case "price: high-low":
					newArr.sort((a, b) => b.price - a.price);
					break;
				case "price: low-high":
					newArr.sort((a, b) => a.price - b.price);
					break;
			}

		saveFunc(newArr, copyArr);
	}

	return (
		<div className={style.filter}>
			<div className={style.priceFromTo}>
				<p>Price</p>
				<input
					placeholder="from"
					onInput={(event) => {
						filtration({
							priceFrom: event.target.value,
							priceTo: null,
							isOnlySale: null,
							sortType: null,
						});
					}}
				></input>
				<input
					placeholder="to"
					onInput={(event) => {
						filtration({
							priceFrom: null,
							priceTo: event.target.value,
							isOnlySale: null,
							sortType: null,
						});
					}}
				></input>
			</div>
			<div className={style.discountedItems}>
				<div>Discounted items</div>
				<input
					type="checkbox"
					onInput={(event) => {
						filtration({
							priceFrom: null,
							priceTo: null,
							isOnlySale: event.target.checked,
							sortType: null,
						});
					}}
				></input>
			</div>
			<div className={style.sorted}>
				Sorted
				<select
					onInput={(event) => {
						filtration({
							priceFrom: null,
							priceTo: null,
							isOnlySale: null,
							sortType: event.target.value,
						});
					}}
				>
					<option value={"by default"}>
						by default
					</option>
					<option  value={"newest"}>
						newest
					</option>
					<option  value={"price: high-low"}>
						price: high-low
					</option>
					<option  value={"price: low-high"}>
						price: low-high
					</option>
				</select>
			</div>
		</div>
	);
};
