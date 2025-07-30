"use client";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import NavItems from "./NavItems";
import Button from "./Button";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "py-6 bg-white/50  backdrop-blur-3xl" : "py-12"
      }`}
    >
      <div className="flex items-center justify-between container mx-auto transition-all duration-300">
        <Logo />
        <div className="flex items-center space-x-10">
          <NavItems />
          <div className="hidden md:flex space-x-7">
            <Button
              size="medium"
              className="bg-white text-gray-800 drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]/10"
            >
              Login
            </Button>
            <Button className="text-white">Sign up</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
