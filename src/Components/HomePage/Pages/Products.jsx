import React from "react";
import { useNavigate } from "react-router";
import { AddCarts } from "../../AllProducts/Addcart";
import { toast } from "sonner";


const Products = ({ product }) => {
  const navigate=useNavigate()
  
  return (
    <div className="">
                <div className="flex flex-col shadow-lg bg-white p-2 rounded-lg justify-around md:ml-3 items-center gap-3 mb-5 w-[200px] md:w-[250px] h-[300px]"
                    onClick={() => navigate(`/productdetails/${product.id}`)}>
                  <img
                    className="w-[200px] gap-2 rounded-lg m-auto mt-3 h-[200px] shadow-lg"
                    src={product.image}
                    alt=""
                  />

                  <h1 className=" text-center font-bold text-gray-900 ">
                    {product.name}
                  </h1>
                </div>
              </div>
      
      
    
  );
};

export default Products;
