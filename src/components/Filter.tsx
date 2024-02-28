import { Link } from "react-router-dom";
import { Input } from "./ui/input";
import { buttonVariants } from "./ui/button";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAppDispatch } from "@/hooks/redux";
import { changeFilter } from "@/store/todos/todosSlice";

const Filter = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="w-full max-w-2xl flex gap-2 mt-4 mx-auto">
      <Input
        className="flex-shrink-1"
        placeholder={"Search a todo..."}
        onInput={(e) => {
          const { value } = e.target as HTMLInputElement;
          dispatch(changeFilter(value));
        }}
      />
      <Link
        to={"/create"}
        className={cn(
          buttonVariants({ variant: "default" }),
          "flex items-center gap-1"
        )}
      >
        <Plus className="w-5 h-5" /> Add todo
      </Link>
    </div>
  );
};

export default Filter;
