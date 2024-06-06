import { currencyFormatter } from "../utils/formatting";
import Button from "../UI/Button";
export default function Cart() {
  return (
    <Modal>
      <h2>Your Cart</h2>
      <ul>        
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal) }</p>
      <p className="modal-actions">
        <Button textOnly>Close</Button>
        <Button >Go to checkout</Button>
      </p>
    </Modal>
  );
}
