import React from "react";
import { CategoriesContainer } from "../../Categories/CategoriesContainer/CategoriesContainer";
import style from "../CatigoriesPage/CatigoriesPage.module.css";
import { TitleGlobal } from "../../UI/TitleGlobal/TitleGlobal";
import { LitlButton } from "../../UI/LitlButton/LitlButton";

export const CatigoriesPage = () => {
	return (
		<div>
			<div className={style.nav}>
				<LitlButton text="Main page" path={"/"} />
				<div className={style.line} />
				<LitlButton text="Categories" path={"/categories"} />
			</div>
			<div className={style.titleGlobal}>
				<TitleGlobal title="Categories" color="black" />
			</div>
			<CategoriesContainer />
		</div>
	);
};
