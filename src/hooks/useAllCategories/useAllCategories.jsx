import React, { useEffect, useState } from "react";
import axios from "axios";

export const useAllCategories = () => {
	const [categories, setCategories] = useState([]);

	const getAllCategoryes = async () => {
		const response = await axios.get(
			"https://telran-project-backend-y5gf.onrender.com/categories/all"
		);

		setCategories(response.data);
	};

	useEffect(() => {
		getAllCategoryes();
	}, []);

	return categories;
};
