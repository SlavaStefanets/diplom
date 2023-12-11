import React from "react";
import style from "./LitlButton.module.css";
import { Link } from "react-router-dom";
export const LitlButton = ({ text ,path }) => {
	return (
		<div>
			<button className={style.btn} >
				<Link to={path}>{text}</Link>
			</button>
		</div>
	);
};
