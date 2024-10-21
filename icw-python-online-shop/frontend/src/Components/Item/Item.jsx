import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="w-21% sm:w-35% hover:scale-105 transition-transform duration-200">
      <Link
        to={`/product/${props.id}`}
        style={{ textDecoration: "none" }}
        onClick={() => window.scrollTo(0, 0)}
      >
        <img
          className="w-full h-36 md:h-40 lg:h-48"
          src={props.image}
          alt="products"
        />
      </Link>
      <p className="my-1 text-base sm:text-lg">{props.name}</p>
      <div className="flex">
        <div className="text-gray-700 font-semibold text-base sm:text-lg">
          {props.price}€
        </div>
      </div>
    </div>
  );
};

export default Item;
