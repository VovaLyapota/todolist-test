import EmptyBackground from "@/components/EmptyBackground";
import Filter from "@/components/Filter";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Todos from "@/components/Todos";
import { useAppSelector } from "@/hooks/redux";
import { selectFilter, selectTodos } from "@/store/todos/todosSelectors";

const TodosPage = () => {
  const todos = useAppSelector(selectTodos);
  const filter = useAppSelector(selectFilter);
  const filteredTodos = todos.filter(
    (todo) => !todo.completed && todo.title.includes(filter)
  );

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
