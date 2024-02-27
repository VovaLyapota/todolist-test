import { todoType } from "@/schemas/createTodoSchema";
import TodosItem from "./TodosItem";

const Todos = ({ todos }: { todos: todoType[] }) => {
  return (
    <div className="mt-4 w-full max-w-screen-lg mx-auto">
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {todos.map((todo) => (
          <TodosItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
