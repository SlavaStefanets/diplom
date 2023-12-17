import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import style from "./OneProductPage.module.css";
import { LitlButton } from "../../UI/LitlButton/LitlButton";
import { Button2 } from "../../UI/Button/Button2";
//import {addGoodInStorage} from '../../../utils/addGoodInStorage.js'

export const OneProductPage = () => {
	const { id } = useParams();
	const [dataProduct, setDataProduct] = useState({});

	const [productCount, setProductCount] = useState(0); //счетчик товара

	const getProduct = async () => {
		const response = await axios.get(
			`https://telran-project-backend-y5gf.onrender.com/products/${+id}`
		);

		setDataProduct(response.data[0]);
	};

	useEffect(() => {
		getProduct();
	}, []);

	function discountProcent() {
		const dif = dataProduct.price - dataProduct.discont_price;
		const procent = (dif / dataProduct.price) * 100;
		return Math.round(procent);
	}

	const link = `https://telran-project-backend-y5gf.onrender.com`;

	function addGoodInStorage() {
		if (productCount < 1) {
			return;
		}
		let basket = localStorage.getItem("basket");

		console.log(basket); /////////consol
		if (basket) {
			basket = JSON.parse(basket);

			const existingProductIndex = basket.findIndex(
				(item) => item.id === dataProduct.id
			);

			if (existingProductIndex >= 0) {
				basket[existingProductIndex].count += productCount;
			} else {
				basket.push({ count: productCount, ...dataProduct });
			}
		} else {
			basket = [{ count: productCount, ...dataProduct }];
		}
		localStorage.setItem("basket", JSON.stringify(basket));
		console.log("BASKET", basket);
	}

	return (
		<div className={style.container}>
			<div className={style.navMenu}>
				<LitlButton text="Main page" path={"/"} />
				<div className={style.line} />
				<LitlButton text="Categories" path={"/categories"} />
				<div className={style.line} />
				<LitlButton
					text="Tools and equipment"
					path={"/categories/" + dataProduct.id}
				/>
				<div className={style.line} />
				<LitlButton text={dataProduct.title} />
			</div>
			<div className={style.imgTitle}>
				<div className={style.img}>
					<img src={`${link}${dataProduct.image}`}></img>
				</div>
				<div className={style.productInfo}>
					<p className={style.title}>{dataProduct.title}</p>
					<div className={style.priceAndDiscountPrice}>
						{dataProduct.discont_price && (
							<div className={style.procent}>
								<p style={{ display: "block" }}>-{discountProcent()}%</p>
							</div>
						)}
						{dataProduct.discont_price ? (
							<>
								<p className={style.price}>${dataProduct.discont_price}</p>
								<p className={style.discont_price}>${dataProduct.price}</p>
							</>
						) : (
							<p className={style.price}>${dataProduct.price}</p>
						)}
					</div>
					<div className={style.andToCard}>
						<div className={style.plusMinus}>
							<button onClick={() => setProductCount(productCount - 1)}>
								-
							</button>
							<p>{productCount}</p>
							<button onClick={() => setProductCount(productCount + 1)}>
								+
							</button>
						</div>
						<Button2 func={addGoodInStorage} text="Add to cart" />
					</div>
					<div className={style.descriptionFoter}>
						<p className={style.nameOfDescription}>Description</p>
						<p className={style.description}>{dataProduct.description}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
