import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function CartReducer(state, action) {
  if (action.type == "ADD ITEM") {
    const existingCartItemIndex = state.items.findIndex((item) => {
      item.id == action.item.id;
    });
    const updateItems = [...state.items];
    if (existingCartItemIndex > -1) {
      const updateItem = {
        ...state.items[existingCartItemIndex],
        quantity: state.items[existingCartItemIndex] + 1,
      };

      //updating that particular index of item only
      updateItems[existingCartItemIndex] = updateItem;
    } else {
      //pushing new item
      updateItems.push({ ...action.item, quantity: 1 });
    }
    return { ...state, item: updateItems };
  }
  if (action.type == "REMOVE ITEM") {
    const existingCartItemIndex = state.items.findIndex((item) => {
      item.id == action.id;
    });
    const updateItems = [...state.items];
    if (existingCartItemIndex == 1) {
      const updatedItems = [...state.items];
      updatedItems.splice(existingCartItemIndex, 1);
    } else {
      const updateItem = {
        ...state.items[existingCartItemIndex],
        quantity: state.items[existingCartItemIndex] - 1,
      };
      updateItems[existingCartItemIndex] = updateItem;
    }
    // if (existingCartItemIndex != 1) {
    //   if (updateItems[existingCartItemIndex].quantity > 1) {
    //     const updateItem = {
    //       ...state.items[existingCartItemIndex],
    //       quantity: state.items[existingCartItemIndex] - 1,
    //     };
    //     //updating that particular index of item only
    //     updateItems[existingCartItemIndex] = updateItem;
    //   } else {
    //     updateItems.splice(existingCartItemIndex, 1);
    //   }
    // }
    return { ...state, item: updateItems };
  }

  return state;
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(CartReducer, { items: [] });

  function addItem(item) {
    dispatchCartAction({
      type: "ADD ITEM",
      item,
    });
  }

  function removeItem(id) {
    dispatchCartAction({
      type: "REMOVE ITEM",
      id,
    });
  }
  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
