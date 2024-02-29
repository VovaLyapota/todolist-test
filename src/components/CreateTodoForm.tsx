import { createTodoSchema, tags, todoType } from "@/schemas/createTodoSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAppDispatch } from "@/hooks/redux";
import { addTodo, updateTodo } from "@/store/todos/todosSlice";
import { nanoid } from "nanoid";
import { useLocation, useNavigate } from "react-router-dom";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { cn } from "@/lib/utils";

const CreateTodoForm = () => {
  const { state: todo } = useLocation();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const form = useForm<todoType>({
    resolver: zodResolver(createTodoSchema),
    defaultValues: {
      id: todo?.id || nanoid(),
      title: todo?.title || "",
      description: todo?.description || "",
      tags: todo?.tags || [],
      completed: todo?.completed || false,
    },
  });

  const onSubmit = (values: todoType) => {
    todo
      ? dispatch(updateTodo({ id: todo.id, changes: values }))
      : dispatch(addTodo(values));
    form.reset();

    navigate("/");
  };

  return (
    <div className=" flex justify-center flex-col items-center mt-4 w-full">
      <h1 className="block text-center font-semibold text-2xl">
        {todo ? "Update" : "Create"} a todo!
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full max-w-80 space-y-4"
        >
          {/* Title input */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Add some title..."
                    {...field}
                    className="border-blue-300"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Description input */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Here you can add some description to your todo"
                    className="resize-none border-blue-300"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          {/* Tags check group */}
          <div className="flex gap-2">
            {tags.map((tag) => (
              <FormField
                key={tag}
                control={form.control}
                name="tags"
                render={({ field }) => {
                  return (
                    <FormItem
                      key={tag}
                      className="flex flex-row items-start space-y-0"
                    >
                      <FormControl>
                        <Checkbox
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...field.value, tag])
                              : field.onChange(
                                  field.value?.filter((value) => value !== tag)
                                );
                          }}
                          className="sr-only"
                        />
                      </FormControl>
                      <FormLabel
                        className={cn(
                          "font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-full px-3 py-2 cursor-pointer",
                          {
                            "bg-blue-600": field.value.includes(tag),
                          }
                        )}
                      >
                        #{tag}
                      </FormLabel>
                    </FormItem>
                  );
                }}
              />
            ))}
          </div>

          <Button className="w-full" type="submit">
            {todo ? "Update" : "Create"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateTodoForm;
