import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productAlreadyExists = state.find(
        (p) => p.id === action.payload.id
      );

      if (!productAlreadyExists) {
        return [...state, { ...action.payload, quantity: 1 }];
      }
    },
    increaseQuantity: (state, action) => {
      const productIndex = state.findIndex((p) => p.id === action.payload.id);
      const product = state[productIndex];
      product.quantity = product.quantity + 1;

      state[productIndex] = product;
    },
    decreaseQuantity: (state, action) => {
      const productIndex = state.findIndex((p) => p.id === action.payload.id);
      const product = state[productIndex];

      if (product.quantity > 1) {
        product.quantity = product.quantity - 1;
        state[productIndex] = product;
      } else {
        return state.filter((p) => p.id !== product.id);
      }
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
