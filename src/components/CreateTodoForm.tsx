import { createTodoSchema, todoType } from "@/schemas/createTodoSchema";
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
import { nanoid } from "nanoid";
import { Textarea } from "./ui/textarea";
import { useAppDispatch } from "@/hooks/redux";
import { addTodo } from "@/store/todos/todosSlice";

const CreateTodoForm = () => {
  const dispatch = useAppDispatch();

  const form = useForm<todoType>({
    resolver: zodResolver(createTodoSchema),
    defaultValues: {
      id: nanoid(),
      title: "",
      description: "",
      completed: false,
    },
  });

  const onSubmit = (values: todoType) => {
    console.log(values);
    dispatch(addTodo(values));
    form.reset();
  };

  return (
    <div className=" flex justify-center flex-col items-center mt-4 w-full">
      <h1 className="block text-center font-semibold text-2xl">
        Create a todo!
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
                  <Input placeholder="Add some title..." {...field} />
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
                    className="resize-none"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          {/* Date picker */}
          {/* <FormField
          control={form.control}
          name="doTo"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Do to</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={new Date(field.value)}
                    onSelect={field.onChange}
                    disabled={(date) => date < new Date()}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        /> */}

          <Button className="w-full" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateTodoForm;
