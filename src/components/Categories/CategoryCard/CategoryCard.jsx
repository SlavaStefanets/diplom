import React from "react";
import style from "./CategoryCard.module.css";
import { useNavigate } from "react-router-dom";
export const CategoryCard = ({ img, title, categoryNum }) => {
    const navigate = useNavigate()
    return (
			<div onClick={() => navigate('/categories/' + categoryNum)} className={style.card}>
				<img className={style.photoImg} src={img} alt="categorie"></img>
				<h5> {title}</h5>
			</div>
		);
};
