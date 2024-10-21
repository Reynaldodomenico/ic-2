import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="mx-[10%] gap-5 sm:flex flex-wrap">
      <div className="flex gap-3 max-w-[50%]">
        <div className="flex flex-col gap-5">
          <img className="h-14 md:h-28" src={product.image} alt="img" />
          <img className="h-14 md:h-28" src={product.image} alt="img" />
          <img className="h-14 md:h-28" src={product.image} alt="img" />
          <img className="h-14 md:h-28" src={product.image} alt="img" />
        </div>
        <div>
          <img className="h-72 md:h-[510px]" src={product.image} alt="img" />
        </div>
      </div>
      <div className="flex flex-col max-w-96">
        <h1 className="mt-2 text-base md:text-xl font-semibold">
          {product.name}
        </h1>
        <div className="my-2">
          Eu volutpat odio facilisis mauris sit amet. Sollicitudin nibh sit amet
          commodo nulla facilisi nullam vehicula.
        </div>
        <div className="flex my-2">
          <div className="text-gray-700">
            <span className="font-bold">Price:</span> ${product.price}
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
          className="px-6 py-3 my-2 max-w-64 text-base text-white bg-primary hover:bg-secondary duration-200"
        >
          ADD TO CART
        </button>
        <p className="mt-2">
          <span className=" font-bold">Category :</span> {product.category}
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
