import { NavLink } from "react-router-dom";
import MaxWidthWrapper from "./MaxWidthWrapper";
import MobileNav from "./MobileNav";
import { buttonVariants } from "./ui/button";

export const paths = [
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
      <nav className="hidden sm:flex justify-center gap-2">
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
      </nav>

      {/* Mobile nav  */}
      <MobileNav />
    </MaxWidthWrapper>
  );
};

export default Navigation;
