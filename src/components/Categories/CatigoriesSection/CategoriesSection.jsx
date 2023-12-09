import React from "react";
import { TitleGlobal } from "../../UI/TitleGlobal/TitleGlobal";
import style from "./CategoriesSection.module.css";
import { Link } from "react-router-dom";
import { CategoContainerCarousel } from "../CategoriesContainer/CategoContainerCarousel";

export const CategoriesSection = () => {
	return (
		<div className={style.container}>
			<div className={style.headerElements}>
				<TitleGlobal title="Categories" color="black" />
				<div className={style.line}></div>
				<button className={style.btn}>
					All categories
					<Link to={"/categories"}></Link>
				</button>
			</div>
			<CategoContainerCarousel />
		</div>
	);
};
