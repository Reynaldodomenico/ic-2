import React from "react";
import arrow_icon from "../Assets/left_arrow.png";

const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="flex flex-wrap items-center gap-2 text-sm mx-[10%] my-4 md:my-8">
      Home <img src={arrow_icon} alt="" /> Category{" "}
      <img src={arrow_icon} alt="" /> {product.category}{" "}
      <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
};

export default Breadcrum;
