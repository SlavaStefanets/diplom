import React from "react";
import { TitleGlobal } from "../../UI/TitleGlobal/TitleGlobal";
import style from "./ProductSection.module.css";
import { SaleProductContainer } from "../ProductContainer/SaleProductContainer";
import { Link } from "react-router-dom";
import {LitlButton} from '../../UI/LitlButton/LitlButton'

export const ProductSection = () => {
	return (
		<div className={style.container}>
			<div className={style.headerElements}>
				<TitleGlobal title="Sale" color="black" />
				<div className={style.line}></div>
				<LitlButton text="All sales">
					<Link to={"/allsalespage"}>All sales</Link>
				</LitlButton>
			</div>
			<SaleProductContainer />
		</div>
	);
};
