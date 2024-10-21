import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Offers from "../Components/Offers/Offers";
import Item from "../Components/Item/Item";

const GameCategory = (props) => {
  const { products } = useContext(ShopContext);
  return (
    <div className="flex flex-col justify-center items-center mx-auto my-8 w-[80%] md:w-[70%]">
      <img src={props.banner} className="w-[80%] md:h-60 lg:h-80" alt="" />

      <p className="text-lg mt-5">
        Games category{" "}
        <span className="font-semibold uppercase">({props.category}) :</span>
      </p>

      <div className="grid mx-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center max-w-screen-lg mt-2 mb-7 md:mt-6">
        {products.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                id={item.id}
                key={i}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <Offers />
    </div>
  );
};

export default GameCategory;
