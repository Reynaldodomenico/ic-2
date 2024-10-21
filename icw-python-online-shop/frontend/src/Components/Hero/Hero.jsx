import React from "react";
import arrow_icon from "../Assets/arrow.png";
import banner_image from "../Assets/banner.png";

const Hero = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-between px-8 sm:px-6 lg:px-28"
      style={{
        backgroundImage: `url(${banner_image})`,
        backgroundSize: "cover",
      }}
    >
      <div className="grid gap-y-4">
        <h2 className="text-white text-3xl sm:text-5xl ">
          GRAB YOUR GAMES HERE!
        </h2>
        <div>
          <p className="text-white text-lg sm:text-3xl">
            New Games Every Month
          </p>
        </div>
        <div className="mt-5">
          <div
            className="flex items-center gap-2 w-52 h-12 bg-accent hover:bg-secondary text-white text-lg font-semibold rounded-full justify-center cursor-pointer duration-200 duration-200"
            onClick={() => {
              const ourProductsElement = document.getElementById("ourProducts");
              if (ourProductsElement) {
                window.scrollTo({
                  top: ourProductsElement.offsetTop,
                  behavior: "smooth",
                });
              }
            }}
          >
            Game Start
            <img src={arrow_icon} alt="" className="w-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
