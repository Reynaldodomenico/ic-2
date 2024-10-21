import React, { useState, useEffect } from "react";
import Item from "../Item/Item";

const OurProducts = () => {
  const [ourProducts, setOurProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(8);

  useEffect(() => {
    fetch("http://localhost:4000/allproducts")
      .then((response) => response.json())
      .then((data) => {
        setOurProducts(data);
      });
  }, []);

  const handleShowMore = () => {
    setVisibleProducts(visibleProducts + 8);
  };

  return (
    <div
      id="ourProducts"
      className="flex flex-col items-center gap-5 mb-20 md:mb-32"
    >
      <h1 className="text-gray-700 text-2xl md:text-3xl lg:text-4xl font-semibold mt-10">
        Our Games
      </h1>
      <hr className="w-32 md:w-40 h-2 md:h-3 bg-gray-900 rounded-full" />
      <div className="grid mx-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center max-w-screen-lg mt-10 md:mt-16">
        {ourProducts.slice(0, visibleProducts).map((item, i) => (
          <div key={i}>
            <Item
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          </div>
        ))}
      </div>
      {visibleProducts < ourProducts.length && (
        <button
          className="bg-primary hover:bg-secondary text-white font-semibold mt-5 py-2 px-4 rounded duration-200"
          onClick={handleShowMore}
        >
          Show More
        </button>
      )}
    </div>
  );
};

export default OurProducts;
