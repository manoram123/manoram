"use client";
import React, { useState, useEffect } from "react";
import Button from "../ui/Button";
import { FiSun, FiMoon, FiMonitor } from "react-icons/fi";
import { useTheme } from "next-themes";

const DarkModeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="ghost-element h-8 w-8" />;
  }

  return (
    <Button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="text-lg h-8 w-8"
      variant="light"
    >
      {theme === "dark" ? (
        <FiMoon />
      ) : theme === "system" ? (
        <FiMonitor />
      ) : (
        <FiSun />
      )}
    </Button>
  );
};

export default DarkModeSwitch;
