import React, { useContext } from 'react'
import { Products } from '../AdminMain/AdminMain'

const AdminProduct = () => {
    const {data}=useContext(Products)
  return (
    <div className='grid grid-cols-2 md:grid-cols-5 gap-y-5'>{data.map((product)=>(
        <div key={product.id}
            className="w-[200px] md:w-[250px] flex flex-col shadow-lg bg-white p-2 rounded-lg justify-between md:ml-3" >
           <div>
           <img className="w-[200px] gap-2 rounded-lg m-auto mt-3 h-[200px] "
            src={product.image}  />
           <div className=" font-bold tracking-tight text-gray-900">{product.name}</div>
           </div>
            <div className='flex justify-around'>
            <button className="p-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg shadow-lg  mt-1 w-20"
            >Edit</button>
            <button className="p-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg shadow-lg  mt-1 w-20"
            >Delete</button>
            </div>
            
        </div>
        
        
    ))}
     
    </div>
  )
}

export default AdminProduct
