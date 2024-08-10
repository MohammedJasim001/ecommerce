import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const ProductLists = () => {
  const userId=useParams()
  const [items,setItems]=useState([])
console.log(userId)
  useEffect(()=>{
    axios.get('http://localhost:3000/products')
      .then((res)=>{
        const item=res.data.filter((item)=>item.id === userId.userId)
        setItems(item)
       
        
      })
      
  },[])

 
  return (
    <div>
      
    

      {items.map((datas)=>{
        return(
          <div 
      className=' bg-white border  h-[300px] md:w-[70%] border-gray-200 rounded-lg shadow-lg ml-5 md:ml-20 flex md:mt-10 md:mb-10'>
      <div>
        <img className="w-[250px] h-[250px]gap-2 rounded-lg m-auto mt-3"
          src={datas.image} alt="" />
      </div>
      <div className='flex flex-col gap-[10px] ml-10 mt-10'>
        <h1 className='text-2xl font-bold tracking-tight text-gray-900'>{datas.name}</h1>
        <h1 className='text-base font-bold tracking-tight text-gray-900'>{datas.brand}</h1>
        <h3>{datas.description}</h3>
        <h4 className='text-gray-900 text-lg font-semibold'>${datas.price}</h4>
       
          <button className='text-gray-900 bg-blue-500 w-[150px] h-[35px] rounded-md  '
          >Add to cart</button>
        </div>
      
        
    </div>
        )

      })}
      
    </div>
  )
}

export default ProductLists
