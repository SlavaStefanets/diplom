import React, { useState, useEffect } from "react";
import axios from "axios";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "../Pages/MainPage/MainPage";
import { CatigoriesPage } from "../Pages/CatigoriesPage/CatigoriesPage";
import { AllProductsPage } from "../Pages/AllProductsPage/AllProductsPage";
import { AllSalesPage } from "../Pages/AllSalesPage/AllSalesPage";
import { AllProductsFromCategorie } from "../Pages/CatigoriesPage/AllProductsFromCategorie";
import { OneProductPage } from "../Pages/AllSalesPage/OneProductPage";
import { BasketPage } from "../Pages/Basket/BasketPage";
import NotFound from "../Pages/NotFound/NotFound";

const MainComponent = () => {
	const [dataCategories, setDataCategories] = useState([]);

	const getAllCategoryes = async () => {
		const response = await axios.get(
			"https://telran-project-backend-y5gf.onrender.com/categories/all"
		);

		const response2 = await axios.get(
			"https://telran-project-backend-y5gf.onrender.com/products/all "
		);

		setDataCategories(response.data);
	};

	useEffect(() => {
		getAllCategoryes();
	}, []);

	return (
		<div>
			<Header />
			<Routes>
				<Route path={"/"} element={<MainPage />} />
				<Route path={"/categories"} element={<CatigoriesPage />} />
				<Route
					path={"/categories/:id"}
					element={<AllProductsFromCategorie />}
				/>
				<Route path={"/products/:id"} element={<OneProductPage />} />
				<Route path={"/allproducts"} element={<AllProductsPage />} />
				<Route path={"/allsalespage"} element={<AllSalesPage />} />
				<Route path={"/basket"} element={<BasketPage />} />
				<Route path={"/*"} element={<NotFound />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default MainComponent;
