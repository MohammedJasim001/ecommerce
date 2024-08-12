
    import React from "react";
import { Link, useParams } from "react-router-dom";


const AdminHome = () => {
const {url}=useParams()
  
const Data=[{
title:'user',
url:'user'
}]

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 ">
      {/* Navbar */}
      <nav className="bg-white shadow">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-semibold text-gray-800">Admin Dashboard</div>
          <div>
            <button className="text-gray-600 hover:text-gray-900">Logout</button>
          </div>
        </div>
      </nav>

      {/* Sidebar and Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-64 bg-gray-800 text-white">
          {/* <div className="px-6 py-4">
            <ul>
              <li className="mb-4">
                <button className="block px-4 py-2 hover:bg-gray-700 rounded">Dashboard</button>
              </li>
              <li className="mb-4">
                <Link to={'/productadmin'}>
                  <button className="block px-4 py-2 hover:bg-gray-700 rounded">Products</button>
                </Link>
                
              </li>
              <li className="mb-4">
                <button className="block px-4 py-2 hover:bg-gray-700 rounded">Orders</button>
              </li>
              <li className="mb-4">
               <Link to={'/users'}>
                <button className="block px-4 py-2 hover:bg-gray-700 rounded">Users</button>
               </Link>
                  
               
                
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-700 rounded">Settings</a>
              </li>
            </ul>

          </div> */}

          {Data.map((item)=(
            <Link
             to={`/adminhome/${item.url}`}
             >
              {/* {item.icon} */}
              {item.title}
             </Link>
          ))}
        </div>
        <div>{url===''}</div>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-semibold text-gray-700">Welcome, Admin!</h1>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-gray-800">Total Sales</h2>
              <p className="text-gray-600 mt-2">$12,000</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-gray-800">Total Orders</h2>
              <p className="text-gray-600 mt-2">150</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-gray-800">New Customers</h2>
              <p className="text-gray-600 mt-2">20</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};



export default AdminHome
