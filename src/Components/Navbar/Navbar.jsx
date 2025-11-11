import React, { use, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router";
import Button from "../Button";
import useTheme from "../../hooks/useTheme";
import { AuthContext } from "../../Provider/AuthContex";
// import { toast } from "react-toastify";
import { CiMenuBurger } from "react-icons/ci";
import MobileNavMenu from "./MobileNavMenu";
import toast from "react-hot-toast";
import NavProfile from "./NavProfile";
import NavTheme from "./NavTheme";
import NavbarSkeleton from "./NavbarSkeleton";
const Navbar = () => {
  const { user, loading, signOutUser } = use(AuthContext);
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
          to="/all-books"
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

  // loading time..
  if (loading) {
    return <NavbarSkeleton />;
  }

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
          <div className="flex gap-2 items-center">
            <NavTheme
              theme={theme}
              handleThemeDropdownOpen={handleThemeDropdownOpen}
              isThemeDropdownOpen={isThemeDropdownOpen}
              handleThemeToggle={handleThemeToggle}
            />
            <NavProfile user={user} handleSignOutUser={handleSignOutUser} />
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
