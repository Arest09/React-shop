import '../cart.css'

export function Cart(props) {
  const { quantity = 0 } = props;
  return (
    <div className="cart pink darken-3 white-text">
      <i class="small  material-icons">add_shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span>:quantity}
    </div>
  );
}
