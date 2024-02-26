import { Suspense } from "react";
import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
