import '../basket.css'

export function BasketItem(props) {
  const { displayName, quantity, regularPrice } = props;

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
      <span className="collection-item__delete material-icons">delete</span>
    </li>
  );
}
