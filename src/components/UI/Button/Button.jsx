import style from "./Button.module.css";

function getButtonTheme(color) {
	switch (color) {
		case "green":
			return {
				background: "rgba(51, 153, 51, 1)",
				borderColor: "#393",
				textColor: "white",
			};
		case "black":
			return {
				background: "black",
				borderColor: "black",
				textColor: "white",
			};
		case "white":
			return {
				background: "#FFF",
				borderColor: "#282828",
				textColor: "rgba(40, 40, 40, 1)",
			};
	}
}

export const Button = ({ color, func, textBtn }) => {
	const buttonTheme = getButtonTheme(color);

	return (
		<button
			className={style.btn}
			onClick={func}
			style={{
				color: buttonTheme.textColor,
				borderColor: buttonTheme.borderColor,
				backgroundColor: buttonTheme.background
			}}
		>
			{textBtn}
		</button>
	);
};
