import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./Slice/DarkModeSlice";

const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
  },
});

export default store;
