import { useRef } from 'react';
import '../basket.css'
import { useContext } from "react";
import { ShopContext } from "../context";

export function BasketItem(props) {
  const { displayName, quantity, regularPrice,id} = props;

  const {deleteItem,changeQuantity} = useContext(ShopContext);
 const inputRef = useRef();

 const handleDelete = (id)=>{

    deleteItem(id);
 }

 const handleChangeQuantity = (count,id)=>{
  
  if(count>0){ changeQuantity(count,id)}
 
 }

  return (
    <li class="collection-item">
      <div className="collection-item__info">
      Название: <span className="collection-item__content">{displayName}</span>
      </div>
      <div className="collection-item__info">
        Количество:  <input placeholder='Введите кол-во' ref = {inputRef}  onChange={()=>{handleChangeQuantity(inputRef.current.value,id)}}  type="number"  min="1" step="1"/>{quantity}
      </div>
      <div className="collection-item__info">
        Цена: <span className="collection-item__content">{regularPrice}</span>
      </div>
      <span className="collection-item__delete material-icons" onClick={()=>{handleDelete(id)}}>delete</span>
      <div className='collection-item__line'></div>
      {quantity * regularPrice} рублей
    </li>
  );
}
