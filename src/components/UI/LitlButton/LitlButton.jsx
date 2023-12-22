import React from "react";
import style from "./LitlButton.module.css";
import { Link } from "react-router-dom";

export const LitlButton = ({ text, path, btnBlack }) => {
	return (
		<div>
			<button>
				<Link
					to={path}
					className={`${style.link} ${btnBlack ? style.btnBlack : ""}`}
				>
					{text}
				</Link>
			</button>
		</div>
	);
};
