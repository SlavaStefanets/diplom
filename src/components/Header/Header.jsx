import React from "react";
import style from "./Header.module.css";
import logo from "../../assets/logo.svg";
import cart from "../../assets/cart.svg";
import { Link } from "react-router-dom";
import BurgerMenu from "../Burger/BurgerMenu";

export const Header = () => {
	function allItems() {
		const basketStr = localStorage.getItem("basket");
		const basketArr = JSON.parse(basketStr);
		let summOfProducts = 0;
		basketArr.forEach((value) => {
			summOfProducts = summOfProducts + value.count;
		});
		return summOfProducts;
	}

	return (
		<div className={style.header}>
			<img className={style.logo} src={logo} alt="logo"></img>
			<div className={style.navMenu}>
				<Link to={"/"}>Main Pages</Link>
				<Link to={"/categories"}>Catigories</Link>
				<Link to={"/allproducts"}>All Products</Link>
				<Link to={"/allsalespage"}>All sales</Link>
			</div>
			<BurgerMenu />
			<Link className={style.basket} to={"/basket"}>
				<img className={style.cart} src={cart} alt="cart" />
				{JSON.parse(localStorage.getItem("basket"))?.length !== 0 ? (
					<svg
						className={style.svg}
						width="26"
						height="26"
						viewBox="0 0 26 26"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle cx="13" cy="13" r="13" fill="#339933" />
					</svg>
				) : (
					""
				)}
				{JSON.parse(localStorage.getItem("basket"))?.length !== 0 ? (
					<p className={style.count}> {allItems()}</p>
				) : (
					""
				)}
			</Link>
		</div>
	);
};
