import React from "react";
import { useNavigate } from "react-router";
import { AddCarts } from "../AllProducts/Addcart";
import { toast } from "sonner";

const ProductsCat = ({ products }) => {
  const navigate = useNavigate();
  const handleCarts = (e) => {
    AddCarts(e);
  
  };

  return (
    <div className="w-[200px] md:w-[250px] flex flex-col shadow-lg bg-white p-2 rounded-lg justify-between">
      <div
        onClick={() => navigate(`/productdetails/${products.id}`)}
      >
        <img
          className="w-[150px] gap-2 rounded-lg m-auto mt-3 h-[150px] "
          src={products.image}
          alt=""
        />

        <div className="flex flex-col gap-[10px] ml-10">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            {products.name}
          </h1>
          <h4 className="text-gray-900 text-lg font-semibold">
            ${products.price}
          </h4>
        </div>
      </div>
      <div className="flex justify-center ">
        <button onClick={()=>handleCarts(products)}
        className="text-white bg-blue-500 hover:bg-blue-600 w-[150px] h-[35px] rounded-md font-bold ">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductsCat;
