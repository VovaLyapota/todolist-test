import { todoType } from "@/schemas/createTodoSchema";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface todosState {
  items: todoType[];
}

const initialState: todosState = {
  items: [],
};

export const todosSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<todoType>) => {
      state.items = [action.payload, ...state.items];
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateTodo: (
      state,
      action: PayloadAction<{ id: string; changes: Partial<todoType> }>
    ) => {
      state.items = state.items.map((item) => {
        if (item.id !== action.payload.id) return item;
        return { ...item, ...action.payload.changes };
      });
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todosSlice.actions;

export default todosSlice.reducer;
