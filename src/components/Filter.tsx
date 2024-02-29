import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { cn } from "@/lib/utils";
import { selectFilter } from "@/store/todos/todosSelectors";
import { changeFilter } from "@/store/todos/todosSlice";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { buttonVariants } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { tags } from "@/schemas/createTodoSchema";

const Filter = () => {
  const dispatch = useAppDispatch();
  const { shownTags } = useAppSelector(selectFilter);

  return (
    <div className="flex flex-col w-full max-w-2xl  gap-2 mt-4 mx-auto">
      {/* Title filter */}
      <div className="w-full flex gap-2 mx-auto">
        <Input
          className="flex-shrink-1 border-blue-300"
          placeholder={"Search a todo..."}
          onInput={(e) => {
            const { value } = e.target as HTMLInputElement;
            dispatch(changeFilter({ fiteredText: value }));
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
      {/* Tag filter */}
      <div className="flex gap-2 flex-wrap">
        {tags.map((tag) => (
          <label
            key={tag}
            className={cn(
              "font-medium text-sm text-white bg-blue-500 hover:bg-blue-600 rounded-full px-3 py-2 cursor-pointer",
              {
                "bg-blue-600": shownTags?.includes(tag),
              }
            )}
          >
            <Checkbox
              onClick={() => {
                return shownTags?.includes(tag)
                  ? dispatch(
                      changeFilter({
                        shownTags: shownTags.filter(
                          (shownTag) => shownTag !== tag
                        ),
                      })
                    )
                  : dispatch(changeFilter({ shownTags: [...shownTags, tag] }));
              }}
              className="sr-only"
            />
            #{tag}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Filter;
