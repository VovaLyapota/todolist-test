import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { NavLink } from "react-router-dom";
import { paths } from "./Navigation";

const MobileNav = () => {
  return (
    <nav className="flex sm:hidden justify-end">
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
    </nav>
  );
};

export default MobileNav;
