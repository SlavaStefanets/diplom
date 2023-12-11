import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'


export const OneProductPage = () => {
 const { id } = useParams();
const [dataProduct, setDataProduct] = useState({});

const getProduct = async () => {
	const response = await axios.get(
		`https://telran-project-backend-y5gf.onrender.com/products/${+id}`
	);
  
	setDataProduct(response.data[0]);
};

useEffect(() => {
	getProduct();
}, []);

const link = `https://telran-project-backend-y5gf.onrender.com`;
  console.log(dataProduct);
 
  return (
		<div>
			<img src={`${link}${dataProduct.image}`}></img>
			<p>{dataProduct.price}</p>
			<p>{dataProduct.title}</p>
			<p>{dataProduct.description}</p>
			<p></p>
		</div>
	);
}

// Object { id: 16, title: "Enchanted Garden Mushroom Trio", 
// price: 55,
//  discont_price: null,
//   description: "This delightful mixed trio of decorative stone Mushrooms surprises and captivates, appearing to have sprouted from a garden bed or hardscape. The set of three is cast in sturdy Glass Fiber Reinforced Concrete (GFRC), a high-density material engineered to withstand freeze/thaw cycles in cold climates.",
//    image: "/product_img/16.jpeg", 
//    createdAt: "2022-10-02T14:43:29.000Z", 
//    updatedAt: "2022-10-02T14:43:29.000Z", categoryId: 3 }
// OneProductPage.jsx:15
