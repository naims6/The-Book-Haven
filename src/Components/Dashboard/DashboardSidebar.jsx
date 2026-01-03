import React, { use } from "react";
import { Link, NavLink } from "react-router";
import {
  Home,
  BookOpen,
  Heart,
  Settings,
  BarChart3,
  LogOut,
  User,
} from "lucide-react";
import { AuthContext } from "../../Provider/AuthContex";

const DashboardSidebar = () => {
  const { user } = use(AuthContext);

  const menuItems = [
    {
      path: "/dashboard",
      label: "Dashboard",
      icon: <Home className="w-5 h-5" />,
      exact: true,
    },
    {
      path: "/my-book",
      label: "My Books",
      icon: <BookOpen className="w-5 h-5" />,
      exact: false,
    },
    {
      path: "/dashboard/favorites",
      label: "Favorites",
      icon: <Heart className="w-5 h-5" />,
      exact: false,
    },
    {
      path: "/dashboard/reading-stats",
      label: "Reading Stats",
      icon: <BarChart3 className="w-5 h-5" />,
      exact: false,
    },
    {
      path: "/dashboard/profile",
      label: "Profile",
      icon: <User className="w-5 h-5" />,
      exact: false,
    },
    {
      path: "/dashboard/settings",
      label: "Settings",
      icon: <Settings className="w-5 h-5" />,
      exact: false,
    },
  ];

  return (
    <div
      className="h-full flex flex-col"
      style={{
        backgroundColor: "var(--color-surface)",
        borderRight: "1px solid var(--color-border)",
      }}
    >
      {/* Sidebar Header */}
      <div
        className="p-6 border-b"
        style={{ borderColor: "var(--color-border)" }}
      >
        <Link to={"/"}>
          <div className="flex items-center space-x-3">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{
                backgroundColor: "var(--color-primary)",
                color: "white",
              }}
            >
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h2
                className="text-lg font-bold"
                style={{ color: "var(--color-text-primary)" }}
              >
                Book Haven
              </h2>
              <p
                className="text-sm"
                style={{ color: "var(--color-text-muted)" }}
              >
                User Dashboard
              </p>
            </div>
          </div>
        </Link>
      </div>

      {/* User Profile Summary */}
      <div
        className="p-6 border-b"
        style={{ borderColor: "var(--color-border)" }}
      >
        <div className="flex items-center space-x-3">
          <div
            className="w-12 h-12 rounded-full overflow-hidden border-2"
            style={{ borderColor: "var(--color-primary)" }}
          >
            {user?.photoURL ? (
              <img
                src={user.photoURL}
                alt={user.displayName || "User"}
                className="w-full h-full object-cover"
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center"
                style={{ backgroundColor: "var(--color-primary)" }}
              >
                <User className="w-6 h-6 text-white" />
              </div>
            )}
          </div>
          <div className="grow">
            <h3
              className="font-semibold"
              style={{ color: "var(--color-text-primary)" }}
            >
              {user?.displayName || "User"}
            </h3>
            <p
              className="text-sm truncate"
              style={{ color: "var(--color-text-muted)" }}
            >
              {user?.email || "user@example.com"}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="grow p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.exact}
                className={({ isActive }) => `
                  flex items-center space-x-3 px-4 py-3 rounded-lg transition-all
                  ${isActive ? "font-semibold shadow-sm" : "hover:bg-bg-muted"}
                `}
                style={({ isActive }) => ({
                  backgroundColor: isActive
                    ? "var(--color-primary)"
                    : "transparent",
                  color: isActive ? "white" : "var(--color-text-primary)",
                })}
              >
                <div style={{ color: "inherit" }}>{item.icon}</div>
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Sidebar Footer */}
      <div
        className="p-4 border-t"
        style={{ borderColor: "var(--color-border)" }}
      >
        <div
          className="p-3 rounded-lg text-center"
          style={{
            backgroundColor: "var(--color-bg-muted)",
            color: "var(--color-text-secondary)",
          }}
        >
          <p className="text-sm">Book Reader</p>
          <p className="text-xs mt-1">Member since 2024</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
