import React from "react";
import footer_logo from "../Assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-primary text-white py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-0">
        <div className="flex items-center gap-2">
          <img src={footer_logo} alt="" className="w-12" />
          <p className="text-2xl font-bold">GameSphere</p>
        </div>
      </div>
      <hr className="my-8 w-4/5 mx-auto border-t-2 border-gray-700" />
      <div className="text-center">
        <p className="text-sm">Copyright @ 2024 - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;