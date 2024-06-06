import { currencyFormatter } from "../utils/formatting.js";
import Button from "./UI/Button.jsx";
import { mealItemActions } from "../store/index.jsx";
import { useDispatch } from 'react-redux';

export default function MealItem({ meal }) {

  //store actions can be dispatched from here by useDispatch 
  const dispatch = useDispatch();

  const handleAddMealToCart = () => {
  // we have to use those Actions which is CONFIGURED in STORE
    dispatch(mealItemActions.addItem(meal));
  };
  
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddMealToCart}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}
