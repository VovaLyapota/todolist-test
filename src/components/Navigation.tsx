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
    <MaxWidthWrapper>
      <div className="flex justify-center gap-2">
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
    </MaxWidthWrapper>
  );
};

export default Navigation;
