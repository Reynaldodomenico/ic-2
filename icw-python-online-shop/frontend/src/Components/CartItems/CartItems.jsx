import React, { useContext } from "react";
import cross_icon from "../Assets/cart_cross_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const CartItems = () => {
  const { products } = useContext(ShopContext);
  const { cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);
  return (
    <div className="mx-[10%] my-24">
      <div className="hidden md:grid grid-cols-6 gap-10 sm:gap-20 py-5 sm:py-7 text-gray-700 text-lg font-semibold">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {products.map((e, i) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={i}>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-10 sm:gap-20 py-5 sm:py-7 text-gray-700 text-base md:text-lg">
                <img className="h-14" src={e.image} alt="" />
                <p>{e.name}</p>
                <p>${e.price}</p>
                <button className="w-10 h-7  md:w-14 md:h-11 border-2 border-secondary/30 bg-white">
                  {cartItems[e.id]}
                </button>
                <p>${e.price * cartItems[e.id]}</p>
                <img
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  className="w-3 md:mx-7 cursor-pointer pt-2"
                  src={cross_icon}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}

      <div className="flex-wrap md:flex my-16">
        <div className="flex-1 flex flex-col mr-48 gap-10">
          <h1>Cart Totals</h1>
          <div>
            <div className="flex justify-between py-3">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="flex justify-between py-3">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="flex justify-between py-3">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button className="bg-primary hover:bg-accent w-56 h-12 outline-none border-none text-white text-sm font-semibold cursor-pointer mb-5 duration-200">
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="flex-1 text-base font-medium">
          <p>If you have a promo code, Enter it here</p>
          <div className="flex items-center justify-between w-96 mt-4 h-12 bg-accent/10">
            <input
              className="border-none outline-none bg-transparent text-base flex-1 h-full pl-5"
              type="text"
              placeholder="promo code"
            />
            <button className="w-32 h-full text-base text-white bg-primary hover:bg-accent cursor-pointer duration-200">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
