import React  from "react";
import style from "./BasketItem.module.css";
import { useState } from "react";
import axios from "axios";

export const OrderDetails = ({popupOpen,setPopupOpen}) => {

	function getTotalPrice() {
		const basketStr = localStorage.getItem("basket");
		const basketArr = JSON.parse(basketStr);
		let totalPrice = 0;
		basketArr.forEach((value) => {
			totalPrice = totalPrice + value.price * value.count;
		});
		return Math.floor(totalPrice);
	}

	function allItems() {
		const basketStr = localStorage.getItem("basket");
		const basketArr = JSON.parse(basketStr);
		let summOfProducts = 0;
		basketArr.forEach((value) => {
			summOfProducts = summOfProducts + value.count;
		});
		return summOfProducts;
	}
	
		const [name, setName] = useState("");
		const [phoneNumber, setPhoneNumber] = useState("");
		const [email, setEmail] = useState("");

		async function submitHandler(e) {
			e.preventDefault();
			const response = await axios.post(
				"https://telran-project-backend-y5gf.onrender.com/order/send",
				{ name: name, phoneNumber: phoneNumber, email: email }
			);
			setPopupOpen(true);
			localStorage.setItem('basket', JSON.stringify([]))
		}

		return (
			<div className={style.orderDetailsContainer}>
				<div className={style.hederOfOrder}>
					<h3>Order details</h3>
					<p className={style.countAllItems}>{localStorage.getItem("basket")&&allItems()} items</p>
					<div className={style.totalPrice}>
						<div className={style.total}>Total</div>
						<div className={style.price2}>$ {localStorage.getItem("basket")&&getTotalPrice()}</div>
					</div>
				</div>
				<form className={style.form} onSubmit={submitHandler}>
					<input
						placeholder={"Name"}
						value={name}
						onChange={(e) => setName(e.target.value)}
					></input>
					<input
						placeholder={"Phone number"}
						value={phoneNumber}
						onChange={(e) => setPhoneNumber(e.target.value)}
					></input>
					<input
						placeholder={"Email"}
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					></input>
					<button className={style.btn}>Order</button>
				</form>
			</div>
		);
	}

