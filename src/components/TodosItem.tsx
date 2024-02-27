import { useAppDispatch } from "@/hooks/redux";
import { todoType } from "@/schemas/createTodoSchema";
import { updateTodo } from "@/store/todos/todosSlice";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const TodosItem = ({ todo }: { todo: todoType }) => {
  const dispatch = useAppDispatch();

  return (
    <li className="flex items-center min-h-12 p-2 border-2 rounded-xl border-blue-400 ">
      <Checkbox
        id={todo.id}
        onClick={() =>
          dispatch(
            updateTodo({ id: todo.id, changes: { completed: !todo.completed } })
          )
        }
        className="w-6 h-6 mr-2"
        checked={todo.completed}
      />

      <p className="text-2xl md:text-2xl text-ellipsis overflow-hidden whitespace-nowrap">
        {todo.title}
      </p>

      <div className="flex flex-nowrap ml-auto space-x-1">
        {/* <Button variant="outline" className="w-fit h-fit p-1 border-blue-400">
          <Pencil />
        </Button>
        <Button variant="outline" className="w-fit h-fit p-1 border-blue-400">
          <Trash />
        </Button> */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <MoreHorizontal />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="active:bg-blue-100 cursor-pointer hover:border-0 hover:bg-blue-100 rounded-sm">
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem className="active:bg-blue-100 cursor-pointer hover:border-0 hover:bg-blue-100 rounded-sm">
              Delete
            </DropdownMenuItem>
            <DropdownMenuItem className="active:bg-blue-100 cursor-pointer hover:border-0 hover:bg-blue-100 rounded-sm">
              Show more
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </li>
  );
};

export default TodosItem;
