import { configureStore } from "@reduxjs/toolkit";
import counter2 from "./slices1";
const store = configureStore({
  reducer: {
    counter: counter2,
  },
});
export default store;
