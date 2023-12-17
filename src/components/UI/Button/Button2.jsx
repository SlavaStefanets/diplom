
import style from "./Button2.module.css";

export const Button2 = ({ text, func }) => {
	return (
		<div>
			<button onClick={() => func()} className={style.btn}>
				{text}
			</button>
		</div>
	);
};
