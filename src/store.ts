import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./storage/counterSlice";
import themeReducer from "./storage/themeSlice";
import todoReducer from "./storage/todosSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
    todos: todoReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
