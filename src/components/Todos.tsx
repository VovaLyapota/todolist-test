import { todoType } from "@/schemas/createTodoSchema";
import TodosItem from "./TodosItem";

const Todos = ({ todos }: { todos: todoType[] }) => {
  return (
    <div className="mt-4 w-full max-w-2xl mx-auto">
      <ul className="grid grid-cols-1 gap-3">
        {todos.map((todo) => (
          <TodosItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
