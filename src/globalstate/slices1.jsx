import { createSlice } from "@reduxjs/toolkit";

const slices2 = createSlice({
  name: "counter2",
  initialState: {
    count: 0,
  },
  reducers: {
    adding: (state, action) => {
      state.count += 1;
    },

    deleting: (state, action) => {
      state.count -= 1;
    },
    increasingBy20: (state, action) => {
      state.count += action.payload;
    },
  },
});
export const { adding, deleting, increasingBy20 } = slices2.actions;
export default slices2.reducer;
