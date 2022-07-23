import { API_KEY, API_URL } from "../config";

import React from "react";
import { useState, useEffect } from "react";
import { Preloader } from "./Preloader";
import { GoodsList } from "./Goods";
import { Cart } from "./Cart";
import { BasketList } from "./BasketList";

export function Shop(params) {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow,setBasketShow] = useState(false);



  const handleBasketShow = ()=>{
    setBasketShow(!isBasketShow)
  }



  useEffect(function fetchGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: `b35796fd-16c7ee01-dfb9819a-947519ee`,
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
    console.log(ItemIndex)
    if (ItemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };

      console.log(newItem)
      
      
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
  }

  return (
    <main className="shop container">
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} isBasketShow = {isBasketShow}/>
      {isBasketShow && <BasketList order={order}/>}  
      {loading ? <Preloader /> : <GoodsList goods={goods} GetItem={GetItem} />}
    </main>
  );
}
