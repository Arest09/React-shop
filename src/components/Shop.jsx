import { API_KEY, API_URL } from "../config";
import { ShopContext } from "./context";//import Context
import reducer from "./reducer";
import React from "react";
import { useState, useEffect } from "react";
import { Preloader } from "./Preloader";
import { GoodsList } from "./Goods";
import { Cart } from "./Cart";
import { BasketList } from "./BasketList";
import { Alert } from "./Alert";

export function Shop(params) {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow,setBasketShow] = useState(false);
  const [alertName,setAlertName] = useState('');



  const handleBasketShow = ()=>{
    setBasketShow(!isBasketShow)
  }



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
        data.shop && setGoods(data.shop);
        setLoading(false);
      });
  }, []);

  function GetItem(item) {
    const ItemIndex = order.findIndex((orderItem) => {
      
        return item.id === orderItem.id;
        
    });
    if (ItemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };      
    
      setOrder([...order, newItem]);
    }
    else{
      const newOrder = order.map((orderItem,index)=>{
        if(index === ItemIndex){
          return{
            ...orderItem,
            quantity:orderItem.quantity + 1,
          }
        }
        else{
          return {
            ...orderItem,
            quantity:orderItem.quantity,
          }
        }
        
      })
      setOrder(newOrder)
    }
    setAlertName(item.displayName)
  }

  function deleteItem(id) {
    let newOrder = [];
  newOrder = order.filter((orderItem)=>{
    return orderItem.id !== id;
   })

   setOrder(newOrder);
  }

  function changeQuantity(newQuantity,id) {
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
  }

  const closeAlert = ()=>{
    setAlertName('');
  }
  return (

<ShopContext.Provider value = {{deleteItem,changeQuantity,GetItem}}>
   <main className="shop container">
    <div>hi</div>
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} isBasketShow = {isBasketShow}/>
      {isBasketShow && <BasketList order={order} />}  
      {loading ? <Preloader /> : <GoodsList goods={goods} />}
      {alertName && <Alert name ={alertName} closeAlert={closeAlert}/>}
    </main>
  </ShopContext.Provider>

  );
}
