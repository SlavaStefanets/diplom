import React from 'react'
import {TitleGlobal} from '../../UI/TitleGlobal/TitleGlobal'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios  from 'axios';
import {ProductCard} from '../../Product/ProductCard/ProductCard'
import style from './AllProductsFromCategorie.module.css'


export const AllProductsFromCategorie = () => {
  const {id} = useParams()

  	const [dataProducts, setDataProducts] = useState([]);
    const [objCategories, setoObjCategories] = useState({})
    
		const getAllProductsFromCategorie = async () => {
			const response = await axios.get(
				"https://telran-project-backend-y5gf.onrender.com/categories/" + id
			);
      
        
			setDataProducts (response.data.data);
      setoObjCategories(response.data.category);
		};

		useEffect(() => {
			getAllProductsFromCategorie();
		}, []);

    const [priceFrom, setPricefrom] = useState('');
    const [priceTo, setPriceTo] = useState('');



	return (
		<div>
			<TitleGlobal title="Tools and equipment" color="black" />
			<div>
				<div className={style.price}>
					<p>Price</p>
					<input
						placeholder="from"
						value={priceFrom}
						onInput={(event) => setPricefrom(event.target.value)}
					></input>
					<input
						placeholder="to"
						value={priceTo}
						onInput={(event) => setPriceTo(event.target.value)}
					></input>
				</div>
				<div></div>
				<div></div>
			</div>
			<div>
				<p>{objCategories.title}</p>
			</div>
			<div className={style.container}>
				{dataProducts.map((el) => (
					<ProductCard
						key={el.id}
						img={`https://telran-project-backend-y5gf.onrender.com${el.image}`}
						title={el.title}
						price={el.price}
						discont_price={el.discont_price}
						id={el.id}
					/>
				))}
			</div>
		</div>
	);
};
