import '../basket.css'

export function BasketItem(props) {
  const { displayName, quantity, regularPrice ,deleteItem,id} = props;

 const handleDelete = (id)=>{

    deleteItem(id);
 }

  return (
    <li class="collection-item">
      <div className="collection-item__info">
      Название: <span className="collection-item__content">{displayName}</span>
      </div>
      <div className="collection-item__info">
        Количество: <span className="collection-item__content">{quantity}</span>
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
