import { currencyFormatter } from "../utils/formatting";
import Button from "./UI/Button.jsx";
import { useSelector } from "react-redux";
import Modal from "./UI/Modal";

export default function Cart() {
  const cartItems = useSelector((state) => state?.mealItem.items);
  const cartView = useSelector((state) => state?.userProgress.progress);
  let openCart;
  cartView == "cart" ? (openCart = true) : (openCart = false);

  return (
    <Modal open={openCart}>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li  key={item.id}>
            {item.name} - {item.price}
          </li>
       )) }
      </ul>
      {/* <p className="cart-total">{currencyFormatter.format(cartTotal)}</p> */}
      <p className="modal-actions">
        <Button textOnly>Close</Button>
        <Button>Go to checkout</Button>
      </p>
    </Modal>
  );
}
