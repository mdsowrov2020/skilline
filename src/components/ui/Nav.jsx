import React from "react";
import Logo from "./Logo";
import NavItems from "./NavItems";
import Button from "./Button";

const Nav = () => {
  return (
    <nav className="flex items-center py-12 justify-between container mx-auto relative z-10 ">
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
    </nav>
  );
};

export default Nav;
