import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartarray: [],
  totalvalue: 0,
};
const cartReducer = createSlice({
  name: "cartshop",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.cartarray.push(action.payload);
      const productvalue = state.cartarray.reduce(
        (total, current) => total + current.price,
        0
      );

      state.totalvalue = productvalue;
    },
    decrement: (state, action) => {
      const index = state.cartarray.findIndex(
        (each) => each.id === action.payload.id
      );
      if (index > -1) {
        state.cartarray.splice(index, 1);
      }
      const productvalue = state.cartarray.reduce(
        (total, current) => total + current.price,
        0
      );
      state.totalvalue = productvalue;
    },
  },
});
export const { increment, decrement } = cartReducer.actions;
export default cartReducer.reducer;
