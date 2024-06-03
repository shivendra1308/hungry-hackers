import { useContext } from "react";
import Button from "../UI/Button.jsx";
import CartContext from "../store/CreateContex.jsx";
export default function MealItem({ meal }) {
const cartCtx = useContext( CartContext);

  function handelAddMealToCart() {
    cartCtx.addItem(meal)
  }
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt="" />
        <div>
          <h3>{meal.header}</h3>
          <p className="meal-item-price">${meal.price}</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <div className="meal-item-action">
          <Button onClick={handelAddMealToCart}>Add to Cart</Button>
        </div>
      </article>
    </li>   
  );
}
