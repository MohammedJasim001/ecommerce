import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const ProductDetails = () => {
const productId=useParams()
const [items,setItems]=useState([])




useEffect(()=>{
  axios.get('http://localhost:3000/products')
    .then((res)=>{
      const item=res.data.filter((item)=>item.id === productId.productId)
      setItems(item)
     
      
    })
    
},[])


return (
  <div className="p-4">
    
  {items.map((datas) => (
    <div
      key={datas.id}
      className="bg-white border border-gray-200 rounded-lg shadow-lg flex flex-col md:flex-row md:mx-20 mx-5 my-5 p-4"
    >
      <div className="flex-shrink-0">
        <img
          className="w-full md:w-[300px] h-[300px] object-cover rounded-lg m-auto"
          src={datas.image}
          alt={datas.name}
        />
      </div>
      <div className="flex flex-col justify-between p-4 mt-4 md:mt-0 md:ml-10 gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight ">
            {datas.name}
          </h1>
          <p className="text-gray-700 mt-2">{datas.description}</p>
        </div>
        <div className="text-base font-semibold  mt-4">
          <div>
            <span className="font-serif text-gray-600">Brand: </span>
            <span className='font-semibold '> {datas.brand}</span>
          </div>
          <div className="flex items-center mt-2">
            <span className="font-serif text-gray-600">Rating: </span>
            
            <span className="font-semibold "> {datas.ratings}</span>
          </div>
          <div className="mt-2">
            <span className="font-serif text-gray-600">Price: </span>
            <span className=" text-2xl font-bold">
              ${datas.price}
            </span>
          </div>
        </div>
       
      </div>
    </div>
  ))}
</div>

)
}

export default ProductDetails
