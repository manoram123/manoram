import Link from "next/link";
import Logo from "../Logo";
import { BsGithub } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import Button from "../ui/Button";
import DarkModeSwitch from "./DarkModeSwitch";

const Navbar: React.FC = () => {
  const NAVLINKS = [
    {
      href: "#",
      name: "About",
      routeName: "about",
    },
    {
      href: "#",
      name: "Blog",
      routeName: "blog",
    },
    {
      href: "#",
      name: "Tech",
      routeName: "tech",
    },
    {
      href: "#",
      name: "Projects",
      routeName: "projects",
    },
  ];

  return (
    <div className="">
      <div className="px-5 md:px-0 md:w-3/5 mx-auto flex items-center justify-between flex-wrap">
        <div className="order-0">
          <div className="text-neutral-950 dark:text-neutral-100">
            <Logo size={52} />
          </div>
        </div>
        <ul className="bg-neutral-200 md:bg-transparent list-none flex flex-col md:flex-row order-1 md:order-0 w-full md:w-fit md:py-0 py-3 rounded-lg items-center gap-3 md:gap-6">
          {NAVLINKS.map((val) => {
            return (
              <li
                key={val.routeName}
                className="flex items-center h-8 px-3 rounded"
              >
                <Link href={val.href}>{val.name}</Link>
              </li>
            );
          })}
        </ul>
        <div className="order-0 md:order-1 flex items-center gap-1">
          <div className="flex items-center gap-1">
            <Button
              className="text-lg h-8 w-8 hover:bg-gray-100"
              variant="light"
            >
              <BsGithub />
            </Button>
            <DarkModeSwitch />
          </div>
          <div className="block md:hidden">
            <Button className="h-8 w-8 text-lg" variant="light">
              <FiMenu />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;