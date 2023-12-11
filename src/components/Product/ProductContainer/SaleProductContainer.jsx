import React from "react";
import style from "./ProductContainer.module.css";
import { ProductCard } from "../ProductCard/ProductCard";
import { useState, useEffect } from "react";
import axios from "axios";

export const SaleProductContainer = () => {
	const [allProducts, setAllProducts] = useState([]);

	const getAllProducts = async () => {
		const response = await axios.get(
			"https://telran-project-backend-y5gf.onrender.com/products/all "
		);

		setAllProducts(
			response.data
				.filter((elem) => {
					if (!elem.discont_price) {
						return false;
					} else {
						return true;
					}
				})
				.slice(0, 4)
		);
	};

	useEffect(() => {
		getAllProducts();
	}, []);
	return (
		<div className={style.container}>
			{allProducts.map((el) => (
				<ProductCard
					key={el.id}
					img={`https://telran-project-backend-y5gf.onrender.com${el.image}`}
					title={el.title}
					price={el.price}
					discont_price={el.discont_price}
				/>
			))}
		</div>
	);
};
