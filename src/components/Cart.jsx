import "../cart.css";

export function Cart(props) {
  const { quantity = 0, handleBasketShow, isBasketShow } = props;
  return (
    <div className="cart pink darken-3 white-text" onClick={handleBasketShow}>
     
      {isBasketShow ? (
        <i class="small material-icons cart__close">close</i>
      ) : (
        <i class="small  material-icons cart__show">add_shopping_cart</i>
      )}

      { <div className="cart__quantity">{quantity}</div> }
    </div>
  );
}
