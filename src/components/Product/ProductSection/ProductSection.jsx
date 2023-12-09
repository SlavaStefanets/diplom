import React from "react";
import { TitleGlobal } from "../../UI/TitleGlobal/TitleGlobal";
import style from "./ProductSection.module.css";
import { ProductContainer } from "../ProductContainer/ProductContainer";
import { Link } from "react-router-dom";

export const ProductSection = () => {
	return (
		<div className={style.container}>
			<div className={style.headerElements}>
				<TitleGlobal title="Sale" color="black" />
				<div className={style.line}></div>
				<button>
					<Link to={"/allsalespage"}>All sales</Link>
				</button>
			</div>
			<ProductContainer />
		</div>
	);
};
