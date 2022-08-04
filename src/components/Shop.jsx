import { API_KEY, API_URL } from "../config";

import React from "react";
import {useEffect,useContext } from "react";
import { Preloader } from "./Preloader";
import { GoodsList } from "./Goods";
import { Cart } from "./Cart";
import { BasketList } from "./BasketList";
import { Alert } from "./Alert";

import { ShopContext } from "../context";

export function Shop(params) {
  const {setGoods,loading,order,isBasketShow,alertName} = useContext(ShopContext);

/*   const [goods, setGoods] = useState([]); */
/*   const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow,setBasketShow] = useState(false);
  const [alertName,setAlertName] = useState(''); */



 


  useEffect(function fetchGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
      method: "GET",
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setGoods(data.shop);
      });
  }, []);



/*   function changeQuantity(newQuantity,id) {
  const  newOrder = order.map((orderItem)=>{
      if(orderItem.id === id ){
        return{...orderItem,
            quantity:newQuantity > 0 ? newQuantity : 0,
        }
      }
      else{
        return{
          ...orderItem,
          quantity:orderItem.quantity,
        }
      }
    })
    setOrder(newOrder);
  } */

 
  return (
    <main className="shop container">
      <Cart quantity={order.length} />
      {isBasketShow && <BasketList/*  changeQuantity={changeQuantity} *//>}  
      {loading ? <Preloader /> : <GoodsList  />}
      {alertName && <Alert />}
    </main>
  );
}
