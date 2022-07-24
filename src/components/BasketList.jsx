import { BasketItem } from "./BasketItem";
import "../basket.css";
import { useRef } from "react";

export function BasketList(props) {
  const { order = [], deleteItem ,changeQuantity} = props;

  let totalPrice = useRef(0);
 
  
 totalPrice.current = order.reduce((prev,{regularPrice,quantity})=>{
    return prev + regularPrice*quantity;
 },0)

  return (
    <ul class="collection">
      <li class="collection-item active">Корзина</li>

      {order.length ? (
        order.map((itemOrder) => {
          return <BasketItem {...itemOrder} deleteItem={deleteItem} changeQuantity = {changeQuantity}  key={itemOrder.id} />;
        })
      ) : (
        <div className="collection__info">ваша корзина пуста</div>
      )}
      <li class="collection-item active">Общая стоимость: {totalPrice.current}</li>
   
    </ul>
  );
}
