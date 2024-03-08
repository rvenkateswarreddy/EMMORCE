import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    increaseByValue: (state, action) => {
      state.value += action.payload;
    },
  },
});
export const { increment, decrement, increaseByValue } = slice.actions;
export default slice.reducer;
