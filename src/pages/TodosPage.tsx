import EmptyBackground from "@/components/EmptyBackground";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Todos from "@/components/Todos";
import { useAppSelector } from "@/hooks/redux";
import { selectTodos } from "@/store/todos/todosSelectors";

const TodosPage = () => {
  const todos = useAppSelector(selectTodos);
  const notCompletedTodos = todos.filter((todo) => !todo.completed);

  return (
    <MaxWidthWrapper className="relative">
      {notCompletedTodos.length !== 0 ? (
        <Todos todos={notCompletedTodos} />
      ) : (
        <EmptyBackground />
      )}
    </MaxWidthWrapper>
  );
};

export default TodosPage;
