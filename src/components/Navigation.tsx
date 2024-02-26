import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { NavLink } from "react-router-dom";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";

const paths = [
  {
    path: "/",
    title: "Todos",
  },
  {
    path: "create",
    title: "Create todo",
  },
  {
    path: "completed",
    title: "Completed todos",
  },
];

const Navigation = () => {
  return (
    <MaxWidthWrapper className="py-2">
      {/* Decktop and tablet nav  */}
      <div className="hidden sm:flex justify-center gap-2">
        {paths.map((item) => (
          <NavLink
            to={item.path}
            key={item.path}
            className={({ isActive }) =>
              buttonVariants({
                variant: isActive ? "default" : "secondary",
              })
            }
          >
            {item.title}
          </NavLink>
        ))}
      </div>

      {/* Mobile nav  */}
      <div className="flex sm:hidden justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Menu />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {paths.map((item) => (
              <DropdownMenuItem
                asChild
                key={item.path}
                className="active:bg-slate-100"
              >
                <NavLink to={item.path}>{item.title}</NavLink>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </MaxWidthWrapper>
  );
};

export default Navigation;
