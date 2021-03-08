import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface Todo {
  Title: String;
  Subtitle: String;
  Content: String;
}

interface TodoState {
  todo: Array<Todo>;
}

const initialState: TodoState = {
  todo: [],
};

export const todoSlice = createSlice({
  name: "todoist",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      if (
        action.payload.Title !== "" &&
        action.payload.Subtitle !== "" &&
        action.payload.Content !== ""
      ) {
        state.todo.push(action.payload);
      }
    },
  },
});

export const { addTodo } = todoSlice.actions;
export const selectTodos = (state: RootState) => state.todos.todo;

export default todoSlice.reducer;
