import React from "react";
import { TitleGlobal } from "../../UI/TitleGlobal/TitleGlobal";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProductCard } from "../../Product/ProductCard/ProductCard";
import style from "./AllProductsFromCategorie.module.css";
import { Filter } from "../../UI/Filter/Filter";
import { LitlButton } from "../../UI/LitlButton/LitlButton";
import { Link } from "react-router-dom";

export const AllProductsFromCategorie = () => {
	const { id } = useParams();

	const [dataProducts, setDataProducts] = useState([]);
	const [copyDataProducts, setCopyDataProducts] = useState([]);
	const [objCategories, setoObjCategories] = useState({});

	const getAllProductsFromCategorie = async () => {
		const response = await axios.get(
			"https://telran-project-backend-y5gf.onrender.com/categories/" + id
		);

		setDataProducts(response.data.data);
		setCopyDataProducts(response.data.data);
		setoObjCategories(response.data.category);
	};

	useEffect(() => {
		getAllProductsFromCategorie();
	}, []);

	function saveFiltration(arr, copyArr) {
		setDataProducts(arr);
		setCopyDataProducts(copyArr);
	}

	return (
		<div className={style.mainDiv}>
			<div className={style.navMenu}>
				<LitlButton text="Main page" path={"/"} />
				<div className={style.line} />
				<LitlButton text="Categories"  />
				<div className={style.line} />
				<LitlButton className={style.activeBtn} text="Tools and equipment" />
			</div>
			<TitleGlobal title="Tools and equipment" color="black" />
			<div className={style.filterMenu}>
				<Filter
					className={style.filter}
					copyArr={copyDataProducts}
					arr={dataProducts}
					saveFunc={saveFiltration}
				></Filter>
			</div>
			<div className={style.container}>
				{dataProducts.map((el) => (
					<ProductCard
						key={el.id}
						img={`https://telran-project-backend-y5gf.onrender.com${el.image}`}
						title={el.title}
						price={el.price}
						discont_price={el.discont_price}
						id={el.id}
					/>
				))}
			</div>
		</div>
	);
};
