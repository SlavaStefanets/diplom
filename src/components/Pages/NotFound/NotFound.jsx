import React from 'react'
import style from "./NotFound.module.css"
import { Button2 } from '../../UI/Button/Button2';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {

  const navigate = useNavigate();

  return (
		<div>
			<div className={style.pictures}>
				<svg
					width="180"
					height="246"
					viewBox="0 0 180 246"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M98.8445 139.709V96.794H151.608V139.709H179.398V187.196H151.608V245.94H98.8445V187.196H0V145.337L87.5882 0.0600586H147.387L64.0203 139.709H98.8445Z"
						fill="#339933"
					/>
				</svg>
				<p className={style.img}></p>
				<svg
					width="180"
					height="246"
					viewBox="0 0 180 246"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M98.8445 139.709V96.794H151.608V139.709H179.398V187.196H151.608V245.94H98.8445V187.196H0V145.337L87.5882 0.0600586H147.387L64.0203 139.709H98.8445Z"
						fill="#339933"
					/>
				</svg>
			</div>
			<p className={style.notFound}>Page Not Found</p>
			<p className={style.litlTex}>
				We’re sorry, the page you requested could not be found. Please go back
				to the homepage.
			</p>
			<div className={style.btn}>
				<Button2
					text="Go Home"
					func={() => {
						navigate("/");
					}}
				/>
			</div>
		</div>
	);
}

export default NotFound