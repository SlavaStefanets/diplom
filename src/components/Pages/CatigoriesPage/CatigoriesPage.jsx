import React from "react";
import { CategoriesContainer } from "../../Categories/CategoriesContainer/CategoriesContainer";
import style from "../CatigoriesPage/CatigoriesPage.module.css";
import { TitleGlobal } from "../../UI/TitleGlobal/TitleGlobal";

export const CatigoriesPage = () => {
	return (
		<div>
			<TitleGlobal title="Categories" color="black" />
			<CategoriesContainer />
		</div>
	);
};
