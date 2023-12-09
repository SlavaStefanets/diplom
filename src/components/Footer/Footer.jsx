import React from "react";
import style from "./Footer.module.css";
import instagram from "../../assets/instagram.svg";
import whatsapp from "../../assets/whatsapp.svg";
import { TitleGlobal } from "../UI/TitleGlobal/TitleGlobal";

export const Footer = () => {
	return (
		<div className={style.footer}>
			<TitleGlobal title="Contact" color={"black"} />
			<div className={style.cards}>
				<div className={style.info}>
					<div className={style.phone}>
						<p className={style.texOne}>Phone</p>
						<p className={style.texTwo}>+49 999 999 99 99</p>
					</div>
					<div className={style.socials}>
						<p className={style.texOne}>Socials</p>
						<div className={style.frame}>
							<img src={instagram} alt={instagram}></img>
							<img src={whatsapp} alt={whatsapp}></img>
						</div>
					</div>
					<div className={style.adress}>
						<p className={style.texOne}>Address</p>
						<p className={style.texTwo}>
							Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland
						</p>
					</div>
					<div className={style.workingHours}>
						<p className={style.texOne}>Working Hours</p>
						<p className={style.texTwo}>24 hours a day</p>
					</div>
				</div>
			</div>

			<iframe
				className={style.map}
				title="Map"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1214.204565910853!2d13.37375723891055!3d52.50793452554617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sStarta%20Institute%20by%20Tel-Ran!5e0!3m2!1sru!2sde!4v1689695378940!5m2!1sru!2sde"
				allowFullScreen=""
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			></iframe>
		</div>
	);
};
