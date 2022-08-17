import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      let newCart = [...state.items];

      if (index >= 0) newCart.splice(index, 1);
      state.items = newCart;
    },
  },
});

export const selectItems = (state) => state.cart.items;
export const selectTotalPrice = (state) =>
  state.cart.items.reduce((total, curr) => total + curr.price, 0);

export default cartSlice.reducer;
export const { addToCart, removeFromCart } = cartSlice.actions;