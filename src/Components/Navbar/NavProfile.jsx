import React, { useState } from "react";
import Button from "../Button";
import { Link } from "react-router";

const NavProfile = ({ user, handleSignOutUser }) => {
  const [isNavProfileOpen, setIsNavProfileOpen] = useState(false);

  const handleNavProfileToggle = () => {
    setIsNavProfileOpen(!isNavProfileOpen);
  };

  return (
    <div className="relative">
      {user ? (
        <>
          <div>
            <img
              onClick={handleNavProfileToggle}
              className="size-9 lg:size-12 rounded-full object-cover cursor-pointer"
              src={user.photoURL}
              alt="user"
            />
          </div>

          <div
            className={`absolute ${
              isNavProfileOpen ? "right-0" : "hidden"
            } w-[200px]  top-12 px-3 py-5 rounded-md bg-gray-800 border border-gray-600`}
          >
            <div className="flex gap-2 items-center">
              <img
                className="size-10 rounded-full cursor-pointer object-cover"
                src={user.photoURL}
                alt={user.displayName}
              />
              <h2 className="cursor-pointer">{user.displayName}</h2>
            </div>
            <div>
              <ul className="mt-5 mb-3">
                <li className="py-2 cursor-pointer">Settings</li>
                <li className="py-2 cursor-pointer">Profile</li>
              </ul>
            </div>
            <span onClick={handleSignOutUser}>
              <Button>Logout</Button>
            </span>
          </div>
        </>
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
  );
};

export default NavProfile;
