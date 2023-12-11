import React from "react";
import style from "../AllProductsPage/AllProductsPage.modeule.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { ProductCard } from "../../Product/ProductCard/ProductCard";

export const AllProductContainer= () => {
	const [allProducts, setAllProducts] = useState([]);

	const getAllProducts = async () => {
		const response = await axios.get(
			"https://telran-project-backend-y5gf.onrender.com/products/all"
		);
		setAllProducts(response.data);
		console.log(response.data);
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
