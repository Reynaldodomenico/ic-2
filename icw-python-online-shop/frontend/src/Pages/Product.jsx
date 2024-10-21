import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import OtherProducts from "../Components/OtherProducts/OtherProducts";

const Product = () => {
  const { products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = products.find((e) => e.id === Number(productId));
  const otherProducts = products.filter((e) => e.id !== Number(productId));
  const shuffleArray = (array) => {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };


  const otherProductsFiltered = otherProducts.filter(
    (e) => e.id !== Number(productId)
  );
  const randomOtherProducts = shuffleArray(otherProductsFiltered).slice(0, 4);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <OtherProducts otherProducts={randomOtherProducts} />
    </div>
  );
};

export default Product;
