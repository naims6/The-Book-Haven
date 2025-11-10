import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet, ScrollRestoration } from "react-router";
import Footer from "../Components/Footer";

const AuthLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default AuthLayout;
