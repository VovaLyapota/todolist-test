import { Loader2 } from "lucide-react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import { Toaster } from "./ui/toaster";

const SharedLayout = () => {
  return (
    <>
      <header className="border-b border-blue-100">
        <Navigation />
      </header>
      <main>
        <Suspense
          fallback={
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Loader2 className="h-14 w-14 opacity-40 text-muted-foreground animate-spin" />
            </div>
          }
        >
          <Outlet />
        </Suspense>
        <Toaster />
      </main>
    </>
  );
};

export default SharedLayout;
