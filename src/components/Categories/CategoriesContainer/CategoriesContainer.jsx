import React from "react";
import style from "./CategoriesContainer.module.css";
import { CategoryCard } from "../CategoryCard/CategoryCard";
import { useState, useEffect } from "react";
import axios from "axios";

export const CategoriesContainer = () => {
	const [dataCategories, setDataCategories] = useState([]);

	const getAllCategoryes = async () => {
		const response = await axios.get(
			"https://telran-project-backend-y5gf.onrender.com/categories/all"
		);
				
		setDataCategories(response.data);
	};

	useEffect(() => {
		getAllCategoryes();
	}, []);
	return (
		<div className={style.container}>
			{dataCategories.map((el, index) => (
				<CategoryCard
					key={el.id}
					categoryNum={index + 1}
					img={`https://telran-project-backend-y5gf.onrender.com${el.image}`}
					title={el.title}
				/>
			))}
		</div>
	);
};
