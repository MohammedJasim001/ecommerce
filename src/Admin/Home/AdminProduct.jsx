import React, { createContext, useContext, useEffect, useState } from "react";
import { Products } from "../AdminMain/AdminMain";
import axios from "axios";


const AdminProduct = () => {

  const [data,setData]=useState([])

  const fn=async()=>{
    try{
    const response= await axios.get('http://localhost:3000/products')
    setData(response.data)
    }
    catch(err){
      console.log(err);
      
    }
  }
  useEffect(()=>{
    fn()
  },[])
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editProduct, setEditProduct] = useState({
    id: '',
    name: '',
    price:'',
    image: '',
    category: '',
    brand: ''
    
  });

  const handleEdit = (product) => {
    setEditProduct(product);
    setIsModalOpen(true);
    
  };

  const handleSaveProduct = async () => {
    try {
      await axios.put(`http://localhost:3000/products/${editProduct.id}`, editProduct);
      setIsModalOpen(false);
    } catch (err) {
      console.error(err);
    }
    fn()
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/products/${id}`);  
    } catch (err) {
      console.error(err);
    }
    fn()
  };

  return (
    <div className="mt-8">
      <ul className="flex items-center justify-around text-lg font-bold bg-gray-200 h-16 rounded-t-lg">
        <li className="px-4 py-2 w-[10%] text-center">ID</li>
        <li className="px-4 py-2 w-[20%] text-center">Name</li>
        <li className="px-4 py-2 w-[20%] text-center">Image</li>
        <li className="px-4 py-2 w-[10%] text-center">Price</li>
        <li className="px-4 py-2 w-[20%] text-center">Category</li>
        <li className="px-4 py-2 w-[20%] text-center">Actions</li>
      </ul>

      {data.map((product) => (
        <div
          key={product.id}
          className="flex items-center justify-around bg-white hover:bg-gray-50 border-b last:border-none py-4 text-sm sm:text-base transition duration-300"
        >
          <div className="px-4 py-2 w-[10%] text-center">{product.id}</div>
          <div className="px-4 py-2 w-[20%] text-center truncate">{product.name}</div>
          <div className="px-4 py-2 w-[20%] flex justify-center">
            <img
              className="w-[80px] h-[80px] object-cover rounded"
              src={product.image}
              alt={product.name}
            />
          </div>
          <div className="px-4 py-2 w-[10%] text-center text-gray-800 font-semibold">
            ${product.price}
          </div>
          <div className="px-4 py-2 w-[20%] text-center">{product.category}</div>
          <div className="flex space-x-2 px-4 py-2 justify-center w-[20%]">
            <button
              onClick={() => handleEdit(product)}
              className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition duration-300"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(product.id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-300"
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      
      {isModalOpen && (
       <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
       <div className="bg-white rounded-lg w-full max-w-2xl p-8 space-y-6 flex justify-between shadow-lg">
         <div className="flex-1 space-y-6">
           <h2 className="text-2xl font-semibold text-gray-800">Edit Product</h2>
     
           <div>
             <label className="block text-sm font-medium text-gray-700">Product ID</label>
             <input
               type="text"
               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-100 cursor-not-allowed"
               value={editProduct.id}
               readOnly
             />
           </div>
     
           <div>
             <label className="block text-sm font-medium text-gray-700">Product Name</label>
             <input
               type="text"
               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
               value={editProduct.name}
               onChange={(e) => setEditProduct({ ...editProduct, name: e.target.value })}
             />
           </div>

           <div>
             <label className="block text-sm font-medium text-gray-700">Price</label>
             <input
               type="text"
               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
               value={editProduct.price }
               onChange={(e) => setEditProduct({ ...editProduct, price: e.target.value })}
             />
           </div>
     
           <div>
             <label className="block text-sm font-medium text-gray-700">Image URL</label>
             <input
               type="text"
               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
               value={editProduct.image}
               onChange={(e) => setEditProduct({ ...editProduct, image: e.target.value })}
             />
           </div>
     
           <div>
             <label className="block text-sm font-medium text-gray-700">Category</label>
             <input
               type="text"
               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
               value={editProduct.category}
               onChange={(e) => setEditProduct({ ...editProduct, category: e.target.value })}
             />
           </div>
     
           <div>
             <label className="block text-sm font-medium text-gray-700">Brand</label>
             <input
               type="text"
               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
               value={editProduct.brand}
               onChange={(e) => setEditProduct({ ...editProduct, brand: e.target.value })}
             />
           </div>
     
           <div className="flex justify-end space-x-4">
             <button
               className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition duration-200"
               onClick={() => setIsModalOpen(false)}
             >
               Cancel
             </button>
             <button
               className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
               onClick={handleSaveProduct}
             >
               Save
             </button>
           </div>
         </div>
     
         <div className="ml-8 flex-shrink-0">
           <img
             className="w-48 h-48 object-cover rounded-lg border border-gray-300 shadow-md"
             src={editProduct.image}
             alt="Product"
           />
         </div>
       </div>
     </div>
     
      )}
    </div>
  );
};

export default AdminProduct;
