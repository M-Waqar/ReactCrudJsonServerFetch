import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container mt-3 mb-3">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
