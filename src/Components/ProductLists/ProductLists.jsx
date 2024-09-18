import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AddCarts } from "../AllProducts/Addcart";
import Navbar from "../HomePage/Navbar";
import Footer from "../HomePage/Footer";
import { Items } from "../MainPage/Main";

const ProductLists = () => {
  const { userId } = useParams();
  const [items, setItems] = useState([]);
  const { fetchUserData } = useContext(Items);

  const handleCarts = async (e) => {
    await AddCarts(e);
    await fetchUserData();
  };

  useEffect(() => {
    axios.get("http://localhost:3000/products").then((res) => {
      const item = res.data.filter((item) => item.id === userId);
      setItems(item);
    });
  }, [userId]);

  return (
    <div>
      <Navbar />
      <div className="p-4 md:p-8 bg-gray-100">
        {items.map((datas) => (
          <div
            key={datas.id}
            className="bg-white rounded-lg shadow-lg md:mx-20 mx-5 my-10 p-6 flex flex-col md:flex-row gap-10 items-center justify-around"
          >
            {/* Product Image */}
            <div className="flex-1 max-w-sm md:max-w-md">
              <img
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
                src={datas.image}
                alt={datas.name}
              />
            </div>

            {/* Product Details */}
            <div className="flex-1 flex flex-col justify-between gap-4 md:ml-20">
              {/* Product Title and Description */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {datas.name}
                </h1>
                <p className="text-lg text-gray-700 mt-2">
                  {datas.description}
                </p>
              </div>

              
              <div className="text-base font-semibold space-y-2">
             
                {datas.qty && (
                  <div>
                    <span className="font-medium text-gray-600">Quantity: </span>
                    <span className="text-gray-900">{datas.qty}</span>
                  </div>
                )}

                <div className="text-lg">
                  <span className="font-medium text-gray-600">Category: </span>
                  <span className="text-gray-900">{datas.item}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-600">Brand: </span>
                  <span className="text-gray-900">{datas.brand}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium text-gray-600">Rating: </span>
                  <span className="text-green-600 ml-2 font-bold">
                    {datas.ratings} ★
                  </span>
                </div>
                <div>
                  <span className="font-medium text-gray-600">Price: </span>
                  <span className="text-2xl font-bold text-gray-900">
                    ${datas.price}
                  </span>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() => handleCarts(datas)}
                className="text-white bg-[#65a30d] hover:bg-[#4d7c0f] py-3 px-6 rounded-md mt-4 w-full transition duration-300 ease-in-out md:w-[25vw]"
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ProductLists;
