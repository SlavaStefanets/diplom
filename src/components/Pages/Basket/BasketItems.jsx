import React, { useEffect, useState } from "react";
import { BasketItem1 } from "./BasketItem1";

export const BasketItems = () => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		console.log(JSON.parse(localStorage.getItem("basket")));
		setItems(JSON.parse(localStorage.getItem("basket")));
	}, []);

  function changeCount(id,diff) {
    const newArr = items.map((elem)=> {
      if(id === elem.id){
        return {...elem,count:elem.count+diff}
      }else{
        return elem;
      }
    })
    setItems(newArr)
    localStorage.setItem('basket',JSON.stringify(newArr))
  }

  function deleteItem(id){
    const newArr = items.filter((elem)=>{
      if(id == elem.id){
        return false;
      } else{
        return true;
      }
    })
    
    setItems(newArr)
    localStorage.setItem('basket',JSON.stringify(newArr))
  }

	return (
		<div>
			{items.map((el) => {
				return (
					<BasketItem1
						key={el.id}
						id={el.id}
						title={el.title}
						price={el.price}
						discont_price={el.discont_price}
						image={el.image}
						count={el.count}
            changeCount={changeCount}
            deleteItem={deleteItem}
					></BasketItem1>
				);
			})}
		</div>
	);
};
