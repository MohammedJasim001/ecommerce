import React from "react";
import { useNavigate } from "react-router";
import { AddCarts } from "./Addcart";
import { toast } from "sonner";

const AllProuducts = ({ product }) => {
  const navigate = useNavigate();
  const handleCarts = (e) => {
    AddCarts(e);
    
  };

  return (
    <div className="bg-white border  h-[250px] w-[90%] border-gray-200 rounded-lg shadow-lg ml-5">
      <div
        onClick={() => navigate(`/productdetails/${product.id}`)}
        className="  md:ml-10 flex"
      >
        <div>
          <img
            className="w-[200px] h-[200px] gap-2 rounded-lg m-auto mt-3"
            src={product.image}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-[10px] ml-10">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
              {product.name}
            </h1>
            <h1 className="text-base font-bold tracking-tight text-gray-900">
              {product.brand}
            </h1>
            <h3>{product.description}</h3>
            <h4 className="text-gray-900 text-lg font-semibold">
              ${product.price}
            </h4>
          </div>
        </div>
      </div>
      <div className="flex items-center">
      <button
        onClick={() => handleCarts(product)}
        className="text-white bg-blue-500 hover:bg-blue-600 w-[150px] h-[35px] rounded-md m-auto font-bold"
      >
        Add to cart
      </button>

      </div>
      
    </div>
  );
};

export default AllProuducts;
