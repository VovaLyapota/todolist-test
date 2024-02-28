import { Suspense } from "react";
import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";
import { Toaster } from "./ui/toaster";

const SharedLayout = () => {
  return (
    <>
      <header className="border-b border-blue-100">
        <Navigation />
      </header>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
        <Toaster />
      </main>
    </>
  );
};

export default SharedLayout;
