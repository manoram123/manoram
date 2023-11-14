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
    <div className="h-full md:bg-white md:dark:bg-neutral-950">
      <div className="h-full bg-white dark:bg-neutral-950 rounded-lg px-5 md:px-0 md:w-3/5 mx-auto flex items-center justify-between flex-wrap">
        <div className="order-0">
          <Link href={"/"} className="text-neutral-950 dark:text-neutral-100">
            <Logo size={52} />
          </Link>
        </div>
        <ul
          className={`bg-neutral-100 dark:bg-neutral-800 md:bg-transparent dark:md:bg-transparent list-none ${
            isToggled ? "flex flex-col" : "hidden"
          } md:flex md:flex-row order-1 md:order-0 w-full md:w-fit md:py-0 py-3 md:px-0 px-3 rounded-lg items-center gap-3 md:gap-6 shadow-sm md:shadow-none`}
        >
          {NAVLINKS.map((val) => {
            return (
              <li
                key={val.routeName}
                className={`flex items-center h-8 px-3 rounded ${
                  pathname === val.href &&
                  "bg-neutral-200 dark:bg-neutral-900 dark:md:bg-neutral-800"
                } w-full md:w-fit transition-colors duration-300`}
              >
                <Link
                  onClick={() => {
                    setIsToggled(false);
                  }}
                  href={val.href}
                >
                  {val.name}
                </Link>
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
