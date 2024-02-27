import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import SharedLayout from "./components/SharedLayout.tsx";
import "./index.css";
import { persistor, store } from "./store/store.tsx";
import { PersistGate } from "redux-persist/integration/react";

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
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
