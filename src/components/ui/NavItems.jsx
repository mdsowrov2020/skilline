import React from "react";

const NavItems = () => {
  return (
    <ul className="flex flex-col md:flex-row md:space-x-11 space-y-2 md:space-y-0">
      <li>
        <a href="#home" className="text-gray-700 text-base hover:text-blue-500">
          Home
        </a>
      </li>
      <li>
        <a href="#home" className="text-gray-700 hover:text-blue-500">
          Career
        </a>
      </li>
      <li>
        <a href="#home" className="text-gray-700 hover:text-blue-500">
          Blog
        </a>
      </li>
      <li>
        <a href="#home" className="text-gray-700 hover:text-blue-500">
          About us
        </a>
      </li>
    </ul>
  );
};

export default NavItems;
