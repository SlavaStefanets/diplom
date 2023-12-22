import React from "react";
import { AllProductContainer } from "../AllProductsPage/AllProductContainer";
import { TitleGlobal } from "../../UI/TitleGlobal/TitleGlobal";
import { Link } from "react-router-dom";
import { LitlButton } from "../../UI/LitlButton/LitlButton";
import style from "./AllSalesPage.module.css";

export const AllSalesPage = () => {
	return (
		<div className={style.container}>
			<div className={style.headerElements}>
				<LitlButton text="Mainn page" path={"/"} />
				<div className={style.line}></div>
				<LitlButton
					text="All sales"
					path={"/allsalespage"}
					btnBlack
				></LitlButton>
			</div>
			<TitleGlobal title="Discounted items" color="black" />
			<div className={style.allProductsContainer}>
				<AllProductContainer
					visible={true}
					isFiltered={true}
				></AllProductContainer>
			</div>
		</div>
	);
};
