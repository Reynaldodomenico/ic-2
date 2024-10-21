import React from "react";
import navlogo from "../Assets/gamespherelogo.png";

const Navbar = () => {
  return (
    <div className="bg-primary">
      <img src={navlogo} className="w-20" alt="" />
    </div>
  );
};

export default Navbar;
