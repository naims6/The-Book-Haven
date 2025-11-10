import React, { use, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router";
import Button from "./Button";
import useTheme from "../hooks/useTheme";
import { AuthContext } from "../Provider/AuthContex";
// import { toast } from "react-toastify";
import { CiMenuBurger } from "react-icons/ci";
import MobileNavMenu from "./MobileNavMenu";
import toast from "react-hot-toast";
const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const { theme, setTheme } = useTheme();
  const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileNavMenuRef = useRef();
  // handle menu toggle
  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // handle theme toggle
  const handleThemeToggle = (currentTheme) => {
    setTheme(currentTheme);
    handleThemeDropdownOpen();
  };
  // toggle theme dropdown
  const handleThemeDropdownOpen = () => {
    setIsThemeDropdownOpen((prev) => !prev);
  };

  // handle user signout
  const handleSignOutUser = () => {
    signOutUser()
      .then(() => {
        toast.success("Logout Successfully");
      })
      .catch((e) => {
        toast(e.message);
      });
  };
  // lists
  const lists = (
    <>
      <li>
        <NavLink
          onClick={() => setIsMenuOpen(false)}
          to="/"
          className="px-8 py-3 lg:px-5"
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          onClick={() => setIsMenuOpen(false)}
          to="/all-book"
          className="px-8 py-3 lg:px-5"
        >
          All Books
        </NavLink>
      </li>
      {user && (
        <>
          {" "}
          <li>
            <NavLink
              onClick={() => setIsMenuOpen(false)}
              to="/add-book"
              className="px-8 py-3 lg:px-5"
            >
              Add Book
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setIsMenuOpen(false)}
              to="/my-book"
              className="px-8 py-3 lg:px-5"
            >
              My Book
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  // handle menu outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        isMenuOpen &&
        mobileNavMenuRef.current &&
        !mobileNavMenuRef.current.contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    // clean up
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isMenuOpen]);

  return (
    <>
      <div className="fixed w-full left-0 top-0 z-20 shadow-md bg-gray-800/70 backdrop-blur-md">
        <div className="flex justify-between min-h-16 items-center container2 px-5">
          {/* menu btn */}
          <div className="lg:hidden">
            <span onClick={handleMenuToggle}>
              <CiMenuBurger size={24} />
            </span>
          </div>
          {/* logo */}
          <div className="flex flex-1 lg:flex-0 justify-center items-center">
            <Link to="/" className="text-center">
              <h1 className="text-3xl text-center whitespace-nowrap">
                📚 Book.io
              </h1>
            </Link>
          </div>
          {/* navbar lists */}
          <div>
            <ul className="hidden lg:flex">{lists}</ul>
          </div>
          {/* end functionality login,logout, register, theme toggle, profile image */}
          <div className="flex gap-3 items-center">
            {/* theme toggle */}
            <div className="relative">
              <span
                onClick={handleThemeDropdownOpen}
                className="cursor-pointer text-base-200"
              >
                {theme === "system" ? (
                  <svg
                    role="img"
                    aria-label="computer monitor"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.3em"
                    height="1.3em"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-monitor"
                  >
                    <rect
                      x="2"
                      y="3"
                      width="20"
                      height="14"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                ) : theme === "dark" ? (
                  <svg
                    role="img"
                    aria-label="Crescent moon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.3em"
                    height="1.3em"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="css-light-0"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
                ) : (
                  <svg
                    role="img"
                    aria-label="Sun"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.3em"
                    height="1.3em"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="css-light-0"
                  >
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                  </svg>
                )}
              </span>
              <div
                className={` ${
                  isThemeDropdownOpen ? "flex" : "hidden"
                } absolute z-50 top-6 left-1/2 -translate-x-1/2 flex-col bg-gray-900 rounded-md border border-gray-500 space-y-2`}
              >
                <span
                  onClick={() => handleThemeToggle("system")}
                  className="border-b border-gray-500 pl-3 pr-7 py-2 cursor-pointer flex gap-1.5 items-center text-left"
                >
                  <svg
                    role="img"
                    aria-label="computer monitor"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-monitor"
                  >
                    <rect
                      x="2"
                      y="3"
                      width="20"
                      height="14"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>{" "}
                  System
                </span>
                <span
                  onClick={() => handleThemeToggle("dark")}
                  className="border-b border-gray-500 pl-3 pr-7 py-2 cursor-pointer flex gap-1.5 items-center"
                >
                  <svg
                    role="img"
                    aria-label="Crescent moon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="css-light-0"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>{" "}
                  Dark
                </span>
                <span
                  onClick={() => handleThemeToggle("light")}
                  className="cursor-pointer pl-3 pr-7 py-2 flex gap-1.5 items-center"
                >
                  <svg
                    role="img"
                    aria-label="Sun"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="css-light-0"
                  >
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                  </svg>{" "}
                  Light
                </span>
              </div>
            </div>

            {/* profile image */}
            {user && (
              <div>
                <img
                  className="size-9 lg:size-12 rounded-full object-cover"
                  src={user.photoURL}
                  alt="user"
                />
              </div>
            )}

            {user ? (
              <div
                className="hidden lg:flex items-center"
                onClick={handleSignOutUser}
              >
                <Button>Logout</Button>
              </div>
            ) : (
              <div className="hidden lg:flex gap-3 items-center">
                {" "}
                {/* login button */}
                <Link to="/auth/login">
                  <Button>Login</Button>
                </Link>
                {/* register button */}
                <Link to="/auth/register">
                  {" "}
                  <Button>Register</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
        <MobileNavMenu
          user={user}
          lists={lists}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          handleSignOutUser={handleSignOutUser}
          mobileNavMenuRef={mobileNavMenuRef}
        />
      </div>
      {/* Dark Overlay visible when menu is opened */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-18 transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
