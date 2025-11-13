import React from "react";

const NavbarSkeleton = () => {
  return (
    <div className="fixed w-full left-0 top-0 z-20 shadow-md bg-surface/70 backdrop-blur-md">
      <div className="flex justify-between min-h-16 items-center container2 px-5 animate-pulse">
        {/* Menu button */}
        <div className="lg:hidden w-6 h-6 bg-gray-600 rounded-md"></div>

        {/* Logo */}
        <div className="flex flex-1 lg:flex-0 justify-center items-center">
          <div className="w-28 h-6 bg-gray-600 rounded-md"></div>
        </div>

        {/* Navbar links */}
        <div className="hidden lg:flex gap-6">
          <div className="w-16 h-4 bg-gray-600 rounded-md"></div>
          <div className="w-16 h-4 bg-gray-600 rounded-md"></div>
          <div className="w-16 h-4 bg-gray-600 rounded-md"></div>
        </div>

        {/* Profile / Theme */}
        <div className="flex gap-3 items-center">
          <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
          <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default NavbarSkeleton;
