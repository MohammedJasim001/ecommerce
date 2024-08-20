import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { AddCarts } from "../AllProducts/Addcart";
import Navbar from "../HomePage/Navbar";
import Footer from "../HomePage/Footer";

const ProductLists = () => {
  const { userId } = useParams();
  const [items, setItems] = useState([]);

  const handleCarts = (e) => {
    AddCarts(e);
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
      <div className="p-4 md:p-8 bg-gray-50">
        {items.map((datas) => (
          <div
            key={datas.id}
            className="bg-white border border-gray-200 rounded-lg shadow-lg flex flex-col md:flex-row md:mx-20 mx-5 my-5 p-4"
          >
            <div className="flex-shrink-0 md:w-[300px]">
              <img
                className="w-full h-[300px] object-cover rounded-lg"
                src={datas.image}
                alt={datas.name}
              />
            </div>
            <div className="flex flex-col justify-between p-4 mt-4 md:mt-0 md:ml-10 gap-2">
              <div>
                <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                  {datas.name}
                </h1>
                <p className="text-gray-700 mt-2">{datas.description}</p>
                <div className="mt-2">
                  <span className="font-medium text-gray-600">Qty: </span>
                  <span className="text-gray-700">{datas.qty}</span>
                </div>
                <div className="mt-2">
                  <span className="font-medium text-gray-600">Category: </span>
                  <span className="font-semibold text-gray-900">
                    {datas.item}
                  </span>
                </div>
              </div>
              <div className="text-base font-semibold mt-4">
                <div>
                  <span className="font-medium text-gray-600">Brand: </span>
                  <span className="text-gray-900">{datas.brand}</span>
                </div>
                <div className="flex items-center mt-2">
                  <span className="font-medium text-gray-600">Rating: </span>
                  <span className="text-green-600 ml-2 font-bold">
                    {datas.ratings} ★
                  </span>
                </div>
                <div className="mt-2">
                  <span className="font-medium text-gray-600">Price: </span>
                  <span className="text-2xl font-bold text-gray-900">
                    ${datas.price}
                  </span>
                </div>
              </div>
              <button
                onClick={() => handleCarts(datas)}
                className="text-white bg-blue-500 hover:bg-blue-600 w-full md:w-[150px] h-[40px] rounded-md font-bold mt-4"
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
