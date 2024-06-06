import Button from "./UI/Button.jsx";
import logoImg from "../assets/logo.jpg";
import { useSelector,useDispatch } from "react-redux";

import { userProgressActions } from "../store/index.jsx";

export default function Header() {
  //useSelector is used to subscribe values from the store 
  // we have subscribe to value which is USED IN CONFIGUR STORE
  
  const cartCtx = useSelector((state) => state?.mealItem.items);

  const dispatch = useDispatch();

  const totalCartItems = cartCtx.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  function handelShowCart(){
    dispatch(userProgressActions.showCart());
  }
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly onClick={handelShowCart}>Cart ({totalCartItems})</Button>
      </nav>
    </header>
  );
}
