import React, { use, useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo-1.png";
import Button from "./Button";
import useTheme from "../hooks/useTheme";
import { AuthContext } from "../Provider/AuthContex";
import { toast } from "react-toastify";
const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const { theme, setTheme } = useTheme();
  const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);
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
        <NavLink to="/" className="">
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to="/aboutus" className="">
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className="">
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="shadow-sm bg-gray-800">
      <div className="flex justify-between min-h-16 items-center container2">
        <div className="flex gap-8 items-center">
          <Link to="/">
            <img className="w-[200px]" src={logo} alt="logo" />
          </Link>
          <ul className="flex gap-2.5">{lists}</ul>
        </div>
        <div className="navbar-center hidden lg:flex">
          {/* <ul className="menu menu-horizontal px-1">{lists}</ul> */}
        </div>

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
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              ) : theme === "dark" ? (
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
                </svg>
              ) : (
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
                </svg>
              )}
            </span>
            <div
              className={` ${
                isThemeDropdownOpen ? "flex" : "hidden"
              } absolute top-6 left-0 flex-col bg-gray-900 rounded-sm border border-gray-500 space-y-2`}
            >
              <span
                onClick={() => handleThemeToggle("system")}
                className="border-b border-gray-500 px-5 py-2 cursor-pointer flex gap-1 items-center"
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
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>{" "}
                System
              </span>
              <span
                onClick={() => handleThemeToggle("dark")}
                className="border-b border-gray-500 px-5 py-2 cursor-pointer flex gap-1 items-center"
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
                className="px-5 cursor-pointer py-2 flex gap-1 items-center"
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
                className="size-12 rounded-full object-cover"
                src={user.photoURL}
                alt="user"
              />
            </div>
          )}

          {user ? (
            <div onClick={handleSignOutUser}>
              <Button>Logout</Button>
            </div>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
