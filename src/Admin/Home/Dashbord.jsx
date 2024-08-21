import React, { useContext } from 'react';
import { Products } from '../AdminMain/AdminMain';

const Dashbord = () => {
  const { data, users } = useContext(Products);

  
  const totalOrders = users.reduce((acc, user) => {
    if (user.orderedProducts && Object.keys(user.orderedProducts).length > 0) {
      return acc + Object.keys(user.orderedProducts).length;
    }
    return acc;
  }, 0);
  
  console.log(totalOrders);
  
  
  
  

  const totalUsers = users.filter((ele) => ele.admin !== true).length;

  return (
    <div>
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-semibold text-gray-700">Lunas Pets</h1>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800">Total Products</h2>
            <p className="text-gray-600 mt-2">{data.length}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800">Total Orders</h2>
            <p className="text-gray-600 mt-2">{totalOrders}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800">Total Customers</h2>
            <p className="text-gray-600 mt-2">{totalUsers}</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashbord;
