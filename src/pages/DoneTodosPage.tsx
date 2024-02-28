import EmptyBackground from "@/components/EmptyBackground";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Todos from "@/components/Todos";
import { useAppSelector } from "@/hooks/redux";
import { selectTodos } from "@/store/todos/todosSelectors";

const DoneTodosPage = () => {
  const todos = useAppSelector(selectTodos);
  const completedTodos = todos.filter((todo) => todo.completed === true);

  return (
    <MaxWidthWrapper className="relative">
      {completedTodos.length !== 0 ? (
        <Todos todos={completedTodos} />
      ) : (
        <EmptyBackground />
      )}
    </MaxWidthWrapper>
  );
};

export default DoneTodosPage;
