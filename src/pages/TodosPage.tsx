import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Todos from "@/components/Todos";
import { useAppSelector } from "@/hooks/redux";
import { selectTodos } from "@/store/todos/todosSelectors";

const TodosPage = () => {
  const todos = useAppSelector(selectTodos);

  return (
    <MaxWidthWrapper>
      <Todos todos={todos} />
    </MaxWidthWrapper>
  );
};

export default TodosPage;
