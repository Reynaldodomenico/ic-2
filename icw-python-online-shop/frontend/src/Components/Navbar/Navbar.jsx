import React, { useState, useContext} from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from "../Assets/nav_dropdown.png";

export const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const menuItems = [
    { name: "Home", path: "/", key: "home" },
    { name: "Action", path: "/action", key: "action" },
    { name: "Multiplayer", path: "/multiplayer", key: "multiplayer" },
    { name: "FPS", path: "/fps", key: "fps" },
  ];

  return (
    <div className="flex justify-between items-center shadow-md px-6 py-3">
      <div className="flex items-center space-x-4">
        <img src={logo} alt="logo" className="w-16" />
        <p className="hidden md:block text-lg font-semibold text-gray-900">
          GameSphere
        </p>
      </div>
      <ul className="hidden md:flex items-center space-x-8">
        {menuItems.map(({ name, path, key }) => (
          <MenuItem
            key={key}
            name={name}
            path={path}
            active={menu === key}
            handleClick={() => {
              setMenu(key);
              closeDropdown();
            }}
          />
        ))}
      </ul>
      <div className="relative md:hidden">
        <button
          onClick={toggleDropdown}
          className="text-gray-700 hover:text-gray-900 focus:outline-none duration-200"
        >
          <img src={nav_dropdown} alt="Menu" className="w-6 h-6" />
        </button>
        {isOpen && (
          <ul className="absolute z-10 top-full left-0 mt-1 bg-white shadow-md rounded-md">
            {menuItems.map(({ name, path, key }) => (
              <MenuItem
                key={key}
                name={name}
                path={path}
                active={menu === key}
                handleClick={() => {
                  setMenu(key);
                  closeDropdown();
                }}
              />
            ))}
          </ul>
        )}
      </div>
      <div className="flex items-center gap-10">
        {localStorage.getItem("auth-token") ? (
          <button
            className="border-2 p-1 px-2 rounded-md border-primary hover:bg-secondary duration-200"
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="px-4 py-2 border border-gray-700 rounded-md text-gray-700 text-lg font-semibold">
              Login
            </button>
          </Link>
        )}
        <Link to="/cart">
          <img src={cart_icon} alt="cart" className="w-10" />
        </Link>
        <div className="rounded-full w-5 h-5 flex justify-center items-center -mt-7 -ml-12 text-sm bg-red-600 text-white">
          {getTotalCartItems()}
        </div>
      </div>
    </div>
  );
};

const MenuItem = ({ name, path }) => {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <Link
      to={path}
      style={{ textDecoration: "none" }}
      className={`cursor-pointer py-2 px-4 md:px-2 hover:bg-secondary rounded-md duration-200`}
    >
      {name}

      {isActive && (
        <hr className="mt-1 mb-0 w-full h-1 bg-primary border-none border-radius-md" />
      )}
    </Link>
  );
};
