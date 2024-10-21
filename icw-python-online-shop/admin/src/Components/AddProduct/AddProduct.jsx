import React, { useState } from "react";
import upload_area from "../Assets/upload_area.svg";

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "action",
    price: "",
  });

  const AddProduct = async () => {
    let dataObj;
    let product = productDetails;

    let formData = new FormData();
    formData.append("product", image);

    await fetch("http://localhost:4000/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        dataObj = data;
      });

    if (dataObj.success) {
      product.image = dataObj.image_url;
      await fetch("http://localhost:4000/addproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((resp) => resp.json())
        .then((data) => {
          if (data.success) {
            alert("Product Added");
            window.location.reload();
          } else {
            alert("Failed");
          }
        });
    }
  };

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="w-full max-w-3xl px-12 py-8">
      <div className="w-full text-base mb-3">
        <p>Product title</p>
        <input
          className="box-border w-full h-12 rounded-md pl-4 border border-gray-300 outline-none text-gray-700 font-poppins text-base"
          type="text"
          name="name"
          value={productDetails.name}
          onChange={(e) => {
            changeHandler(e);
          }}
          placeholder="Type here"
        />
      </div>
      <div className="flex gap-12">
        <div className="w-full text-base mb-3">
          <p>Price</p>
          <input
            className="box-border w-full h-12 rounded-md pl-4 border border-gray-300 outline-none text-gray-700 font-poppins text-base"
            type="text"
            name="price"
            value={productDetails.price}
            onChange={(e) => {
              changeHandler(e);
            }}
            placeholder="Type here"
          />
        </div>
      </div>
      <div className="w-full text-base mb-3">
        <p>Product category</p>
        <select
          value={productDetails.category}
          name="category"
          className="p-2 w-28 h-12 text-base text-gray-700 border border-gray-300 rounded-md"
          onChange={changeHandler}
        >
          <option value="action">Action</option>
          <option value="multiplayer">Multiplayer</option>
          <option value="fps">FPS</option>
        </select>
      </div>
      <div>
        <p>Product image</p>
        <label for="file-input">
          <img src={!image ? upload_area : URL.createObjectURL(image)} alt="" />
        </label>
        <input
          onChange={(e) => {
            imageHandler(e);
          }}
          type="file"
          name="image"
          id="file-input"
          hidden
        />
      </div>
      <button
        className="bg-primary text-white hover:bg-secondary py-5 px-10 rounded-md mt-5 duration-200"
        onClick={() => {
          AddProduct();
        }}
      >
        ADD
      </button>
    </div>
  );
};

export default AddProduct;
