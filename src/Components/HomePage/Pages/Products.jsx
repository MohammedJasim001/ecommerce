import React from "react";
import { useNavigate } from "react-router";
import { AddCarts } from "../../AllProducts/Addcart";
import { toast } from "sonner";


const Products = ({ product }) => {
  const navigate=useNavigate()
  const handleCarts = (e) => {
    AddCarts(e);
  };
  return (
    <div className="bg-white border  border-gray-200 rounded-lg shadow-lg md:ml-3">
      <div
        onClick={() => navigate(`/productdetails/${product.id}`)}
        className="   flex flex-col items-center justify-center"
      >
        <div className="">
          <img
            className="w-[250px] h-[250px] rounded-lg shadow-xl p-2  mt-3"
            src={product.image}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-between items-center mt-3">
         
            <h1 className=" font-bold tracking-tight text-gray-900">
              {product.name}
            </h1>
           
            
            <h4 className="text-gray-900 text-lg font-semibold">
              ${product.price}
            </h4>
         
        </div>
      </div>
      
      
    </div>
  );
};

export default Products;
