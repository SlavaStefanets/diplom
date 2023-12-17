import React from "react";
import { AllProductContainer } from "./AllProductContainer";
import { Filter } from "../../UI/Filter/Filter";
import { TitleGlobal } from "../../UI/TitleGlobal/TitleGlobal";
import { LitlButton } from "../../UI/LitlButton/LitlButton";
import style from "../AllProductsPage/AllProductsPage.module.css";

export const AllProductsPage = () => {
	return (
		<div>
			<div className={style.navM}>
				<LitlButton text="Main page" path={"/"} />
				<div className={style.line} />
				<LitlButton text="All products" path={"/allproducts"} />
			</div>
			<div className={style.title}>
				<TitleGlobal title="All products" />
			</div>
			
			<div className={style.container}>
				<AllProductContainer visible={true} isFiltered={false}/>
			</div>
		</div>
	);
};
