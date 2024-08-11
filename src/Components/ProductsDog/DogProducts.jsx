import React from 'react'
import { useNavigate } from 'react-router'
import { AddCarts } from '../AllProducts/Addcart'


const DogProducts = ({products}) => {
  const navigate = useNavigate()

  return (
    <div className="w-[200px] md:w-[250px] flex flex-col shadow-lg bg-white p-2 rounded-lg justify-between md:ml-3 transition duration-300 ease-in-out transform hover:scale-110">
      <div
        onClick={() => navigate(`/productdetails/${products.id}`)}
      >
        <img
          className="w-[200px] gap-2 rounded-lg m-auto mt-3 h-[200px] "
          src={products.image}
          alt=""
        />

        <div className="flex flex-col gap-[10px]  ">
          <h1 className=" font-bold tracking-tight text-gray-900">
            {products.name}
          </h1>
          <h1 className="bg-green-700 w-10 rounded-md px-2">{products.ratings}*</h1>
          <h4 className="text-gray-900 text-lg font-semibold">
            ${products.price}
          </h4>
        </div>
      </div>
    </div>
  )
}

export default DogProducts
