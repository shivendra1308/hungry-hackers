import { useCallback, useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "../UI/Button.jsx";
import CartContext from "../store/CreateContex.jsx";
export default function Header() {
  const cartCtx = useContext(CartContext);
  const totalCartitems = cartCtx.items.reduce((totalNumberOfItems , items) => {
    return totalNumberOfItems + items.quantity
  }
    , 0);
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="" />
        <h1>Hungry Hackers</h1>
      </div>
      <nav>
        <Button textOnly>Cart({totalCartitems})</Button>
      </nav>
    </header>
  );
}
