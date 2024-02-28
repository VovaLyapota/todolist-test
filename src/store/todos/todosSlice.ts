import { todoType } from "@/schemas/createTodoSchema";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface todosState {
  items: todoType[];
  filter: string;
}

const initialState: todosState = {
  items: [],
  filter: "",
};

export const todosSlice = createSlice({
  name: "todos",
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
    changeFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, changeFilter } =
  todosSlice.actions;

export default todosSlice.reducer;
