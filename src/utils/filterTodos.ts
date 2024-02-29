import { todoType } from "@/schemas/createTodoSchema";
import { FilterState } from "@/store/todos/todosSlice";

export const filterTodos = (
  todos: todoType[],
  { fiteredText = "", shownTags }: FilterState,
  isCompleted: boolean
) => {
  return todos.filter((todo) => {
    const todoIsCompleted = todo.completed === isCompleted;
    const hasText = todo.title
      .toLowerCase()
      .includes(fiteredText.toLowerCase());
    const hasNoPickedTags = !shownTags.length;
    const hasPickedTags =
      hasNoPickedTags ||
      shownTags.some((shownTag) => todo.tags.includes(shownTag));

    return todoIsCompleted && hasText && hasPickedTags;
  });
};
