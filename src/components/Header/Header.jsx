import React from "react";
import style from "./Header.module.css";
import logo from "../../assets/logo.svg";
import cart from "../../assets/cart.svg";
import { Link } from "react-router-dom";
import BurgerMenu from '../Burger/BurgerMenu'
// import { useState} from "react-router-dom";


export const Header = () => {
	// const [state,setState] = useState([])
	// useEffect(()=>{
	// 	setState(JSON.parse(localStorage.getItem("basket")))
	// })
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
			<BurgerMenu/>
			<Link className={style.basket} to={'/basket'}>
				<img className={style.cart} src={cart} alt="cart" />
				<p> {allItems()}</p>
			</Link>
		</div>
	);
};



