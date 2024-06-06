import Button from "./UI/Button.jsx";
import logoImg from "../assets/logo.jpg";
import { useSelector } from "react-redux";

export default function Header() {
  const cartCtx = useSelector((state) => state?.counter.items);
  const totalCartItems = cartCtx.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({totalCartItems})</Button>
      </nav>
    </header>
  );
}
