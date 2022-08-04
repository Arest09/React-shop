import "../cart.css";
import { useContext } from "react";
import { ShopContext } from "../context";

export function Cart(props) {
  const { order, handleBasketShow, isBasketShow } = useContext(ShopContext);

  const quantity = order.length;
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
