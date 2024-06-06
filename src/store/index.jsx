import { createSlice, configureStore } from "@reduxjs/toolkit";


// createSlice is just like createReducer , 
// it creates its own copy of state thus we can directly manipulate the state
// type of action is not required as its has actions that can be directed siapatched from components 
const mealItemSlice = createSlice({
  name: "handelMeals",
  initialState: {
    items: [],
  },
  reducers: {
    addItem(state, action) {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const updatedItems = [...state.items];
      if (existingCartItemIndex > -1) {
        const existingItem = state.items[existingCartItemIndex];
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems.push({ ...action.payload, quantity: 1 });
      }
      return { ...state, items: updatedItems };
    },
  },
});


//similar to createStore
// multiple reducers can be configured together in the form Sclies 
const store = configureStore({
  reducer: {
    mealItem: mealItemSlice.reducer, // fetch data to the component similar to subscribing
  },
});

export const mealItemActions = mealItemSlice.actions; // dispatch action to sclice from components 

export default store;
