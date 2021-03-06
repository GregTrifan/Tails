import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./storage/counterSlice";
import themeReducer from "./storage/themeSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
