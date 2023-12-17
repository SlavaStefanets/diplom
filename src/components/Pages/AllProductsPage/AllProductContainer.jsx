import React from "react";
import style from "./AllProductContainer.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { ProductCard } from "../../Product/ProductCard/ProductCard";
import { Filter } from "../../UI/Filter/Filter";


export const AllProductContainer = ({ visible, isFiltered }) => {
	const [allProducts, setAllProducts] = useState([]);
	const [allCopyProducts, setAllCopyProducts] = useState([]);

	const getAllProducts = async () => {
		const response = await axios.get(
			"https://telran-project-backend-y5gf.onrender.com/products/all"
		);
		let arr = response.data;
		if (isFiltered) {
			arr = arr.filter((item) => item.discont_price !== null);
		}
		setAllProducts(arr);
		setAllCopyProducts(arr);
	};

	useEffect(() => {
		getAllProducts();
	}, []);

	function saveFiltration(arr, copyArr) {
		setAllProducts(arr);
		setAllCopyProducts(copyArr);
	}
	return (
		<div>
		
			<div>
				<Filter
					className={style.filter}
					arr={allProducts}
					copyArr={allCopyProducts}
					saveFunc={saveFiltration}
				></Filter>
			</div>
			<div className={style.container}>
				{allProducts.map((el) => (
					<ProductCard
						key={el.id}
						img={`https://telran-project-backend-y5gf.onrender.com${el.image}`}
						title={el.title}
						price={el.price}
						discont_price={el.discont_price}
						visible={visible}
						id={el.id}
					/>
				))}
			</div>
		</div>
	);
};
