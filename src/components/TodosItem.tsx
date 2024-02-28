import { useAppDispatch } from "@/hooks/redux";
import { cn } from "@/lib/utils";
import { todoType } from "@/schemas/createTodoSchema";
import { deleteTodo, updateTodo } from "@/store/todos/todosSlice";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { BookOpen, MoreHorizontal, Trash } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Link, useNavigate } from "react-router-dom";

const DropdownItemClassname =
  "active:bg-blue-100 cursor-pointer hover:border-0 hover:bg-blue-100 rounded-sm pl-1";

const TodosItem = ({ todo }: { todo: todoType }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [shouldShowDetails, setShouldShowDetails] = useState(false);

  const toggleDetails = () => setShouldShowDetails((p) => !p);
  const deleteItem = () => dispatch(deleteTodo(todo.id));
  const updateItem = () =>
    dispatch(
      updateTodo({
        id: todo.id,
        changes: { completed: !todo.completed },
      })
    );

  return (
    <li
      className={cn(
        "max-h-[50px] p-2 pb-1 overflow-hidden border-2 rounded-xl border-blue-400",
        {
          "max-h-fit": shouldShowDetails,
        }
      )}
    >
      <div className="flex items-center pb-2">
        <Checkbox
          id={todo.id}
          onClick={updateItem}
          className="w-6 h-6 mr-2 border-2 border-blue-400  hover:border-primary data-[state=checked]:border-primary"
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
              <DropdownMenuItem asChild>
                <Link to={"/create"} className={DropdownItemClassname}>
                  Edit
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                className={DropdownItemClassname}
                onClick={deleteItem}
              >
                Delete
              </DropdownMenuItem>
              <DropdownMenuItem
                className={DropdownItemClassname}
                onClick={toggleDetails}
              >
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
            onClick={deleteItem}
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
            onClick={() => navigate("/create")}
          >
            Edit
          </Button>
        </div>
      </div>
    </li>
  );
};

export default TodosItem;
