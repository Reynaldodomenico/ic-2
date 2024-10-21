import React, { useEffect, useState } from "react";
import cross_icon from "../Assets/cross_icon.png";

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = () => {
    fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const removeProduct = async (id) => {
    await fetch("http://localhost:4000/removeproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });

    fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  };

  return (
    <div className="flex flex-col items-center w-full max-h-[800px] px-4 lg:px-12 py-2 m-">
      <h1 className="my-2 text-lg font-bold">All Products List</h1>
      <div className="my-2 grid grid-cols-5 gap-1 text-center sm:gap-14 md:gap-20 text-sm md:text-lg">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="overflow-y-auto text-center">
        <hr />
        {allproducts.map((e) => {
          return (
            <div>
              <div className="grid grid-cols-5 gap-3 text-sm md:text-base my-2">
                <img className="h-14 md:h-20" src={e.image} alt="" />
                <p cartitems-product-title>{e.name}</p>
                <p>${e.price}</p>
                <p>{e.category}</p>
                <img
                  className="mx-auto"
                  onClick={() => {
                    removeProduct(e.id);
                  }}
                  src={cross_icon}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListProduct;
