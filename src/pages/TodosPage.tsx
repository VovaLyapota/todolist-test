import EmptyBackground from "@/components/EmptyBackground";
import Filter from "@/components/Filter";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Todos from "@/components/Todos";
import { useAppSelector } from "@/hooks/redux";
import { selectFilter, selectTodos } from "@/store/todos/todosSelectors";

const TodosPage = () => {
  const todos = useAppSelector(selectTodos);
  const { shownTags, fiteredText } = useAppSelector(selectFilter);
  const filteredTodos = todos.filter((todo) => {
    const isCompleted = todo.completed;
    const hasText = todo.title
      .toLowerCase()
      .includes(fiteredText.toLowerCase());
    const hasNoPickedTags = !shownTags.length;
    const hasPickedTags =
      hasNoPickedTags ||
      shownTags.some((shownTag) => todo.tags.includes(shownTag));

    return isCompleted && hasText && hasPickedTags;
  });

  return (
    <MaxWidthWrapper className="relative">
      <Filter />
      {filteredTodos.length !== 0 ? (
        <Todos todos={filteredTodos} />
      ) : (
        <EmptyBackground />
      )}
    </MaxWidthWrapper>
  );
};

export default TodosPage;
