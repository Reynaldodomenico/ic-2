import React from "react";
import gamesphere_image from "../Assets/gamesphere.png";
import { Link } from "react-router-dom";

const Offers = () => {
  return (
    <div className="bg-primary to-transparent pb-7 px-8 md:px-8 lg:px-12 xl:px-16 2xl:px-20 flex flex-wrap items-center justify-center rounded-lg">
      <div className=" bg-primary">
        <img
          className="w-48 md:w-64 lg:w-80 xl:w-96"
          src={gamesphere_image}
          alt=""
        />
      </div>
      <div className="text-center md:text-left md:max-w-lg">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-3">
          Exclusive Offers
        </h1>
        <p className="text-base md:text-lg lg:text-xl font-semibold text-white mb-8">
          Only on our best sellers!
        </p>
        <button className="bg-accent text-white py-3 px-8 md:py-4 md:px-10 rounded-full text-lg md:text-xl font-semibold hover:bg-secondary duration-200">
          <Link to="/" style={{ textDecoration: "none" }}>
            Check now
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Offers;
