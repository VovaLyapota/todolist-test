import { lazy } from "react";
import { Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";

const CreateTodo = lazy(() => import("./pages/CreateTodoPage"));
const DoneTodos = lazy(() => import("./pages/DoneTodosPage"));
const TodosPage = lazy(() => import("./pages/TodosPage"));

function App() {
  return (
    <Route path="/" element={<SharedLayout />}>
      <Route path="create" element={<CreateTodo />} />
      <Route path="completed" element={<DoneTodos />} />
      <Route index element={<TodosPage />} />
    </Route>
  );
}

export default App;
