import { useRef } from 'react';
import '../basket.css'

export function BasketItem(props) {
  const { displayName, quantity, regularPrice ,deleteItem,id,changeQuantity} = props;

 const inputRef = useRef();

 const handleDelete = (id)=>{

    deleteItem(id);
 }

 const handleChangeQuantity = (count,id)=>{
 

  changeQuantity(count,id);
 }

  return (
    <li class="collection-item">
      <div className="collection-item__info">
      Название: <span className="collection-item__content">{displayName}</span>
      </div>
      <div className="collection-item__info">
        Количество:  <input placeholder='Введите кол-во' ref = {inputRef} onChange={()=>{handleChangeQuantity(inputRef.current.value,id)}}  type="number" />{quantity}
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
