"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "../Logo";
import { BsGithub } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import Button from "../ui/Button";
import DarkModeSwitch from "./DarkModeSwitch";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const [isToggled, setIsToggled] = useState(false);

  const pathname = usePathname();

  const NAVLINKS = [
    {
      href: "/about",
      name: "About",
      routeName: "about",
    },
    {
      href: "/blog",
      name: "Blog",
      routeName: "blog",
    },
    {
      href: "/tech",
      name: "Tech",
      routeName: "tech",
    },
    {
      href: "/projects",
      name: "Projects",
      routeName: "projects",
    },
  ];

  return (
    <div className="h-full md:bg-white md:dark:bg-neutral-950 relative">
      <div className="h-full bg-white dark:bg-neutral-950 rounded-lg px-5 md:px-0 md:w-3/5 mx-auto flex items-center justify-between flex-wrap">
        <div className="order-0">
          <Link href={"/"} className="text-neutral-950 dark:text-neutral-100">
            <Logo size={42} />
          </Link>
        </div>
        <div
          className={`absolute md:relative px-4 w-full md:w-auto top-14 right-4 left-0 md:top-0 md:right-0 transition-opacity duration-300 ${
            isToggled
              ? "opacity-100 z-10"
              : "opacity-0 md:opacity-100 hidden md:flex"
          }`}
        >
          <div className="flex flex-col md:flex-row gap-6 border-2 p-2 md:p-0 dark:border-neutral-800 md:border-0 md:m-0 rounded-md bg-white dark:bg-neutral-950 md:bg-transparent">
            {NAVLINKS.map((nav, ind) => {
              return (
                <Link
                  key={ind}
                  onClick={() => setIsToggled(false)}
                  className={`text-secondary hover:text-default transition-colors duration-300 px-4 py-2 rounded-md ${
                    pathname.includes(nav.href)
                      ? "bg-gray-100 dark:bg-neutral-800"
                      : ""
                  }`}
                  href={nav.href}
                >
                  {nav.name}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="order-0 md:order-1 flex items-center gap-1">
          <div className="flex items-center gap-1">
            <Link
              className="text-lg h-8 w-8 hover:bg-gray-100 dark:hover:bg-neutral-800 flex items-center justify-center rounded-md"
              href={"https://github.com/manoram123"}
              target="_blank"
            >
              <BsGithub />
            </Link>
            <DarkModeSwitch />
          </div>
          <div className="block md:hidden">
            <Button
              onClick={() => setIsToggled(!isToggled)}
              title="Menu"
              className="h-8 w-8 text-lg"
              variant="light"
            >
              <FiMenu />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
