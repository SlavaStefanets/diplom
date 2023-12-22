import React, { useState } from "react";
import { TitleGlobal } from "../UI/TitleGlobal/TitleGlobal";
import style from "./SendCuponForm.module.css";
import axios from "axios";

export const SendCuponForm = () => {
	const [name, setName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [email, setEmail] = useState("");

	async function submitHandler(e) {
		e.preventDefault();
		const response = await axios.post(
			"https://telran-project-backend-y5gf.onrender.com/sale/send ",
			{ name: name, phoneNumber: phoneNumber, email: email }
		);
	}

	return (
		<div className={style.cupon}>
			<TitleGlobal
				title={"5% off on the first order"}
				color={"rgba(255, 255, 255, 1)"}
			/>
			<div className={style.container}>
				<img className={style.image} src="/img/CuponDiscount2.png"></img>
				<form className={style.form} onSubmit={submitHandler}>
					<input
						placeholder={"Name"}
						value={name}
						onInput={(e) => setName(e.target.value)}
					></input>
					<input
						placeholder={"Phone number"}
						value={phoneNumber}
						onInput={(e) => setPhoneNumber(e.target.value)}
					></input>
					<input
						placeholder={"Email"}
						value={email}
						onInput={(e) => setEmail(e.target.value)}
					></input>
					<button className={style.btn} >
						Get a discount
					</button>
				</form>
			</div>
		</div>
	);
};
