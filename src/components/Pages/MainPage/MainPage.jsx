import React from "react";
import style from "./MainPage.module.css";
import { DiscountInfo } from "../../../components/DicsountInfo/DiscountInfo";
import { CategoriesSection } from "../../Categories/CatigoriesSection/CategoriesSection";
import { ProductSection } from "../../Product/ProductSection/ProductSection";
import { SendCuponForm } from "../../SendCuponForm/SendCuponForm";

export const MainPage = () => {
	return (
		<div className={style.mainPage}>
			<DiscountInfo />
			<div className={style.underMainPage}>
				<CategoriesSection />
				<SendCuponForm />
				<ProductSection />
			</div>
		</div>
	);
};
