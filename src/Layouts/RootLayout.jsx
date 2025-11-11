import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet, ScrollRestoration } from "react-router";
import Footer from "../Components/Footer";

const RootLayout = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default RootLayout;
