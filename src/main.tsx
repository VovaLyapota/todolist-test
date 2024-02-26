import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import SharedLayout from "./components/SharedLayout.tsx";
import "./index.css";

const CreateTodo = lazy(() => import("./pages/CreateTodoPage"));
const DoneTodos = lazy(() => import("./pages/DoneTodosPage"));
const TodosPage = lazy(() => import("./pages/TodosPage"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SharedLayout />}>
      <Route path="create" element={<CreateTodo />} />
      <Route path="completed" element={<DoneTodos />} />
      <Route index element={<TodosPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
