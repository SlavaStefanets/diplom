import React from "react";
import style from "./BasketPopup.module.css";

export const BasketPopup = ({ closePopup }) => {
	return (
		<div className={style.popupWrapper}>
			<div className={style.popupContent}>
				<p className={style.firstP}>Congratulations! </p>
				<p className={style.secondP}>
					Your order has been successfully placed on the website.<br></br> A manager will
					contact you shortly to confirm your order.
				</p>
				<div>
					<button className={style.btn} onClick={()=>closePopup()}>
						<svg
							width="44"
							height="44"
							viewBox="0 0 44 44"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M33 11L11 33"
								stroke="white"
								stroke-width="3.66667"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M11 11L33 33"
								stroke="white"
								stroke-width="3.66667"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
};
