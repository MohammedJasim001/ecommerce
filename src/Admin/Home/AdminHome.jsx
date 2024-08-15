import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import AdminProduct from "./AdminProduct";
import Users from "./Users";
import Dashbord from "./Dashbord";
import AddProducts from "./AddProducts";
import { VscThreeBars } from "react-icons/vsc";

const AdminHome = () => {
  const { url } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const Data = [
    { title: "Users", url: "users" },
    { title: "Products", url: "products" },
    { title: "Dashboard", url: "dashbord" },
    { title: "Add Products", url: "addproducts" },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100 w-full absolute">
      
      
      <nav className="bg-[#3b82f6] shadow w-full fixed top-0 left-0 z-20"> 
        <div className="mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex gap-2">
            <button
              className="text-white md:hidden focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
            <VscThreeBars />
            </button>
            <div className="text-xl font-semibold text-white">Admin</div>
          </div>
          <div className="flex items-center">
            <Link to={"/"}>
              <button className="text-white hover:text-gray-300 mr-4">Home</button>
            </Link>
          </div>
        </div>
      </nav>

      
      <div
        className={`fixed inset-0 bg-[#10b981] text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out w-72 h-full pt-20 z-10 md:translate-x-0`} 
      >
        {Data.map((item, ind) => (
          <Link
            key={ind}
            className="block w-[80%] mx-auto"
            to={`/admin/${item.url}`}
            onClick={() => setIsOpen(false)} 
          >
            <div className="hover:bg-[#34d399] rounded px-6 py-2 mb-4">
              {item.title}
            </div>
          </Link>
        ))}
      </div>

     
      <div className="flex-1 ml-0 md:ml-72 w-full p-6 pt-20">
        {url === "users" ? (
          <Users />
        ) : url === "products" ? (
          <AdminProduct />
        ) : url === "dashbord" ? (
          <Dashbord />
        ) : (
          <AddProducts />
        )}
      </div>
    </div>
  );
};

export default AdminHome;
