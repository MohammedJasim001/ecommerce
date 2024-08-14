import React from "react";
import { Link, useParams } from "react-router-dom";
import AdminProduct from "./AdminProduct";
import Users from "./Users";
import Dashbord from "./Dashbord";
import AddProducts from "./AddProducts";

const AdminHome = () => {
  const { url } = useParams();

  const Data = [
    {
      title: "Users",
      url: "users",
    },
    {
      title: "Products",
      url: "products",
    },
    {
      title: "Dashboard",
      url: "dashbord",
    },
    {
      title: "Add Products",
      url: "addproducts",
    },
    
    
    
  ];

  return (
    <div className="min-h-screen flex bg-gray-100 w-full absolute">
     
      <nav className="bg-blue-300 shadow w-full fixed top-0 left-0 z-10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-semibold text-gray-800">Admin Dashboard</div>
          <div>
            <Link to={"/"}>
              <button className=" text-gray-600 hover:text-gray-900">Home</button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="flex flex-1 pt-5">
        
        <div className="w-72 bg-gray-800 text-white fixed top-0 left-0 h-full pt-20">
          {Data.map((item,ind) => (
            <Link
              key={ind}
              className="block w-[80%] mx-auto"
              to={`/admin/${item.url}`}
            >
              <div className="hover:bg-gray-700 rounded px-6 py-2 mb-4">
                {item.title}
              </div>
            </Link>
          ))}
        </div>

     
        <div className="ml-72 w-full p-6">
          {url === "users" ? 
            <Users />
           : url === "products" ? 
            <AdminProduct />
           : url === "dashbord" ? 
            <Dashbord />
           : 
            <AddProducts />
          }
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
