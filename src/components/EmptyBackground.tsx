import { cn } from "@/lib/utils";
import { Archive } from "lucide-react";
import { Link } from "react-router-dom";
import { buttonVariants } from "./ui/button";

const EmptyBackground = () => {
  return (
    <div className="absolute top-16 left-1/2 -translate-x-1/2 flex flex-col items-center select-none">
      <Archive className="w-14 h-14 text-muted-foreground" />
      <p className="text-muted-foreground text-2xl sm:text-xl max-w-[272px] text-center">
        There is no any todos, but you can{" "}
        <Link
          to="/create"
          className={cn(
            buttonVariants({ variant: "link" }),
            "text-muted-foreground text-2xl sm:text-xl p-0"
          )}
        >
          create
        </Link>{" "}
        a new one.
      </p>
    </div>
  );
};

export default EmptyBackground;
