// src/components/layouts/Layout.js
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="big-container" >
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
