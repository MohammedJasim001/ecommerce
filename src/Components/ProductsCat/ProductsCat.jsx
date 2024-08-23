import React from "react";
import { useNavigate } from "react-router";

const ProductsCat = ({ products }) => {
  const navigate = useNavigate();

  return (
    <div className="w-[200px] md:w-[250px] flex flex-col shadow-lg bg-white p-2 rounded-lg justify-between md:ml-3 transition duration-300 ease-in-out transform hover:scale-110">
      <div onClick={() => navigate(`/productdetails/${products.id}`)}>
        <img
          className="w-[200px] gap-2 rounded-lg m-auto mt-3 h-[200px] mb-3"
          src={products.image}
          alt=""
        />

        <div className="flex flex-col gap-[10px]  ">
          <h1 className=" font-bold text-gray-900">
            {products.name}
          </h1>
          <span className="text-green-600 font-bold ml-2">
            {products.ratings} ★
          </span>
          <h4 className="text-gray-900 text-lg font-semibold">
            ${products.price}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ProductsCat;
