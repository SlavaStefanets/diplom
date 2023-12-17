import React from "react";
import { TitleGlobal } from "../../UI/TitleGlobal/TitleGlobal";
import style from "./CategoriesSection.module.css";
import { Link } from "react-router-dom";
import { CategoContainerCarousel } from "../CategoriesContainer/CategoContainerCarousel";
import { LitlButton } from "../../UI/LitlButton/LitlButton";
import { Route } from "react-router-dom";

export const CategoriesSection = () => {
	return (
		<div className={style.container}>
			<div className={style.headerElements}>
				<TitleGlobal title="Categories" color="black" />
				<div className={style.line}></div>
				<LitlButton text="All categories" path={"/categories"}>
				</LitlButton>
			</div>
			<CategoContainerCarousel />
		</div>
	);
};
