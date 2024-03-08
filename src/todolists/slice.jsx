import { createSlice } from "@reduxjs/toolkit";

const todoslice = createSlice({
  name: "todo",
  initialState: {
    todo_array: [],
  },
  reducers: {
    adding: (state, action) => {
      state.todo_array.push({
        id: action.payload.id,
        text: action.payload.text,
      });
    },
    removing: (state, action) => {
      state.todo_array = state.todo_array.filter(
        (each) => each.id != action.payload
      );
    },
  },
});
export const { adding, removing } = todoslice.actions;
export default todoslice.reducer;
