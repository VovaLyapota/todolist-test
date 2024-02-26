import CreateTodoForm from "@/components/CreateTodoForm";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const CreateTodoPage = () => {
  return (
    <MaxWidthWrapper className="flex justify-center">
      <CreateTodoForm />
    </MaxWidthWrapper>
  );
};

export default CreateTodoPage;
