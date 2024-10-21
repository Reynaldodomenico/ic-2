import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex lg:flex-col justify-center lg:justify-start pt-8 lg:gap-5 w-full lg:max-w-64 lg:h-screen">
      <Link to="/addproduct" style={{ textDecoration: "none" }}>
        <div className="flex items-center justify-center mx-5 py-2 px-2 bg-primary/30 rounded-md">
          <p>Add Product</p>
        </div>
      </Link>
      <Link to="/listproduct" style={{ textDecoration: "none" }}>
        <div className="flex items-center justify-center mx-5 py-2 px-2 bg-primary/30 rounded-md">
          <p>Product List</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
