import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from "sonner";

const AddProducts = () => {
  const navigate = useNavigate();
  

  const [data,setData]=useState([])

  const fn = async() =>{
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

  const [input, setInput] = useState({
    id: "",
    name: "",
    price: "",
    category: "",
    image: "",
    brand: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSaveProduct = async () => {
   
    const { id, name, price, category, image, brand } = input;
    if (!id || !name || !price || !category || !image || !brand) {
      toast.warning(" Fill the required details.");
      return; 
    }
    else{
    try {
      const response = await axios.post(`http://localhost:3000/products/`, input);
      setData([...data, response.data]); 
      
     
    } catch (err) {
      console.log(err);
    }
    navigate('/admin/products')
    fn()
    toast.success('Product added')
  }
  };

  return (
    <div className="mt-8 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-3xl p-8 space-y-6 flex justify-between shadow-lg">
        <div className="flex-1 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Add Product</h2>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Product ID
            </label>
            <input
              type="text"
              name="id"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={input.id}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={input.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              type="text"
              name="price"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={input.price}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Image URL
            </label>
            <input
              type="text"
              name="image"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={input.image}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <input
              type="text"
              name="category"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={input.category}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Brand
            </label>
            <input
              type="text"
              name="brand"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={input.brand}
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              onClick={() => setInput('')}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition duration-200"
            >
              Cancel
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
              onClick={handleSaveProduct}
              type="submit"
            >
              Save
            </button>
          </div>
        </div>

        <div className="ml-8 flex-shrink-0">
          <img
            className="w-48 h-48 object-cover rounded-lg border border-gray-300 shadow-md"
            src={input.image}
            alt="Product"
          />
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
