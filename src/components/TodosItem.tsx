import { useAppDispatch } from "@/hooks/redux";
import { todoType } from "@/schemas/createTodoSchema";
import { deleteTodo, updateTodo } from "@/store/todos/todosSlice";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { BookOpen, MoreHorizontal, Pencil, Trash } from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

const TodosItem = ({ todo }: { todo: todoType }) => {
  const dispatch = useAppDispatch();
  const [shouldShowDetails, setShouldShowDetails] = useState(false);
  const toggleDetails = () => setShouldShowDetails((p) => !p);

  return (
    <li
      className={cn(
        "max-h-[50px] p-2 pb-1 overflow-hidden border-2 rounded-xl border-blue-400 transition-all",
        {
          "max-h-fit": shouldShowDetails,
        }
      )}
    >
      <div className="flex items-center pb-2">
        <Checkbox
          id={todo.id}
          onClick={() =>
            dispatch(
              updateTodo({
                id: todo.id,
                changes: { completed: !todo.completed },
              })
            )
          }
          className="w-6 h-6 mr-2"
          checked={todo.completed}
        />
        <p className="text-2xl md:text-2xl text-ellipsis overflow-hidden whitespace-nowrap">
          {todo.title}
        </p>
        {/* Mobile todo item control */}
        <div className="flex sm:hidden flex-nowrap ml-auto space-x-1">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <MoreHorizontal />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem className="active:bg-blue-100 cursor-pointer hover:border-0 hover:bg-blue-100 rounded-sm pl-1">
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem className="active:bg-blue-100 cursor-pointer hover:border-0 hover:bg-blue-100 rounded-sm pl-1">
                Delete
              </DropdownMenuItem>
              <DropdownMenuItem className="active:bg-blue-100 cursor-pointer hover:border-0 hover:bg-blue-100 rounded-sm pl-1">
                Show more
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {/* Desktop todo item control */}
        <div className="hidden sm:flex flex-nowrap ml-auto space-x-1">
          {/* <Button variant="outline" className="w-fit h-fit p-1 border-blue-400">
          <Pencil />
        </Button> */}
          <Button
            variant="outline"
            className="w-fit h-fit p-1 border-none"
            onClick={toggleDetails}
          >
            <BookOpen />
          </Button>
          <Button
            variant="outline"
            className="w-fit h-fit p-1 border-none"
            onClick={() => dispatch(deleteTodo(todo.id))}
          >
            <Trash />
          </Button>
        </div>
      </div>
      <div>
        <p className="w-[80%] text-wrap">{todo.description}</p>
        <div className="flex gap-1 items-center">
          <Button
            variant="link"
            className="p-0 text-muted-foreground"
            onClick={toggleDetails}
          >
            Show less
          </Button>
          <span className="text-muted-foreground select-none">|</span>
          <Button
            variant="link"
            className="p-0 text-muted-foreground"
            onClick={toggleDetails}
          >
            Edit
          </Button>
        </div>
      </div>
    </li>
  );
};

export default TodosItem;
