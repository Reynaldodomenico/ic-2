import React from "react";
import Item from "../Item/Item";

const OtherProducts = ({ otherProducts }) => {
  return (
    <div className="flex flex-col items-center gap-3 pt-11 pb-24">
      <h1 className="text-xl md:text-2xl font-bold">Other Games</h1>
      <hr className="bg-black h-1 w-[150px] rounded-lg" />
      <div className="grid mx-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center max-w-screen-lg mt-2 mb-7 md:mt-6">
        {otherProducts.map((item, i) => {
          return (
            <div key={i}>
              <Item
                id={item.id}
                key={i}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OtherProducts;
