import { useContext } from "react";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../utils/formatting";
import Button from "../UI/Button";
export default function Cart() {
  const cartCtx = useContext(CartContext);
  const cartTotal = cartCtx.items.reduce((totalPrice, item) => {
    return totalPrice + item + item.quantity * item.price;
  }, 0);

  return (
    <Modal>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <li>
            {" "}
            {item.name} _ {item.quantity}
          </li>
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal) }</p>
      <p className="modal-actions">
        <Button textOnly>Close</Button>
        <Button >Go to checkout</Button>
      </p>
    </Modal>
  );
}
