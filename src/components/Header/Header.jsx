import React from "react";
import style from "./Header.module.css";
import logo from "../../assets/logo.svg";
import cart from "../../assets/cart.svg";
import { Link } from "react-router-dom";

export const Header = () => {
	return (
		<div className={style.header}>
			<img className={style.logo} src={logo} alt="logo"></img>
			<div className={style.navMenu}>
				<Link to={"/"}>Main Pages</Link>
				<Link to={"/categories"}>Catigories</Link>
				<Link to={"/allproducts"}>All Products</Link>
				<Link to={"/allsalespage"}>All sales</Link>
			</div>
			<img className={style.cart} src={cart} alt="cart" />
		</div>
	);
};
