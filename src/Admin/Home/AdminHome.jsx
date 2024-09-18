import React, { useContext, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AdminProduct from "./AdminProduct";
import Users from "./Users";
import Dashbord from "./Dashbord";
import AddProducts from "./AddProducts";
import { VscThreeBars } from "react-icons/vsc";
import { FaUsers } from "react-icons/fa";
import { IoIosCart } from "react-icons/io";
import { BiCartAdd } from "react-icons/bi";
import { MdSpaceDashboard } from "react-icons/md";
import { Products } from "../AdminMain/AdminMain";
import { CiLogout } from "react-icons/ci";
import { RiUserSharedLine } from "react-icons/ri";

const AdminHome = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [items, setItems] = useState([]);
  const { data } = useContext(Products);
  const navigate = useNavigate();
  const { url } = useParams();
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const Data = [
    { title: "Users", url: "users", icon: <FaUsers /> },
    { title: "Products", url: "products", icon: <IoIosCart /> },
    { title: "Dashboard", url: "dashbord", icon: <MdSpaceDashboard /> },
    { title: "Add Products", url: "addproducts", icon: <BiCartAdd /> },
  ];

  function handleClick(details) {
    setItems([details]);
    setIsSearch(true);
    setInput("");
  }

  const result = data.filter((item) => {
    return (
      input &&
      item &&
      item.name &&
      item.name.toLowerCase().includes(input.toLowerCase())
    );
  });

  const handleLogout = () => {
    localStorage.clear();
    navigate("/signin");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100 w-full absolute">
      <div className={`md:w-[82%] ${isSearch ? "blur-sm fixed " : ""}`}>
        <nav className="bg-[#3b82f6] shadow w-full fixed top-0 left-0 z-20">
          <div className="mx-auto px-6 py-4 flex justify-between items-center h-[10vh]">
            <div className="flex gap-2">
              <button
                className="text-white md:hidden focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                <VscThreeBars />
              </button>
              <div className="text-xl font-semibold text-white">Admin</div>
            </div>

            <div className="flex gap-2 md:gap-5">
              <div>
                <input
                  className="border relative md:w-[350px] h-10 rounded-md border-black md:mr-2 pl-3"
                  placeholder="search product"
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2 text-white hover:text-gray-300"
                onClick={() => navigate(`/`)}>
              <RiUserSharedLine  className="text-2xl"/>
                <button
                  className=" md:mr-4 hidden md:block"
                >
                  User Page
                </button>
              </div>
              <div className="flex items-center gap-2 text-white hover:text-gray-300" onClick={handleLogout}>
                <CiLogout className="text-2xl " />
                <button className=" mr-4 hidden md:block">
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </nav>

        <div
          className={`fixed mt-10 bg-[#10b981] text-white transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out w-72 h-full pt-20 z-10 md:translate-x-0`}
        >
          {Data.map((item, ind) => (
            <Link
              key={ind}
              className="block w-[80%] mx-auto "
              to={`/admin/${item.url}`}
              onClick={() => setIsOpen(false)}
            >
              <div className="hover:bg-[#34d399] rounded px-6 py-2 mb-4 flex items-center text-xl gap-2" >
                <div className="text-4xl text-black"> {item.icon}</div>
                <div> {item.title}</div>
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
          ) : url === "addproducts" ? (
            <AddProducts />
          ) : (
            <div>404 error....</div>
          )}
        </div>

        <div className="fixed top-14 mt-1 w-[300px] md:w-[350px] bg-white z-40 rounded shadow-md right-16 md:right-72 md:mr-2">
          {result.map((details, id) => (
            <div 
              className="cursor-pointer hover:bg-gray-200 px-4 py-2 "
              onClick={() => handleClick(details)}
              key={id}
            >
              {details.name}
            </div>
          ))}
        </div>
      </div>

      {isSearch && (
        <div className="absolute top-0 left-0 w-full h-[100vh] flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="flex flex-col gap-8 bg-white p-6 rounded-lg shadow-lg">
            {items.map((datas) => (
              <div
                key={datas.id}
                className="bg-white border border-gray-200 rounded-lg shadow-lg flex flex-col md:flex-row md:mx-20 mx-5 my-5 p-4"
              >
                <div className="flex-shrink-0 md:w-[300px]">
                  <img
                    className="w-full h-[300px] object-cover rounded-lg"
                    src={datas.image}
                    alt={datas.name}
                  />
                </div>
                <div className="flex flex-col justify-between p-4 mt-4 md:mt-0 md:ml-10 gap-2">
                  <div>
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                      {datas.name}
                    </h1>
                    <p className="text-gray-700 mt-2">{datas.description}</p>
                    <div className="mt-2">
                      <span className="text-gray-700">{datas.qty}</span>
                    </div>
                    <div className="mt-2">
                      <span className="font-medium text-gray-600">
                        Category:{" "}
                      </span>
                      <span className="font-semibold text-gray-900">
                        {datas.item}
                      </span>
                    </div>
                  </div>
                  <div className="text-base font-semibold mt-4">
                    <div>
                      <span className="font-medium text-gray-600">Brand: </span>
                      <span className="text-gray-900">{datas.brand}</span>
                    </div>
                    <div className="flex items-center mt-2">
                      <span className="font-medium text-gray-600">
                        Rating:{" "}
                      </span>
                      <span className="text-green-600 ml-2 font-bold">
                        {datas.ratings} ★
                      </span>
                    </div>
                    <div className="mt-2">
                      <span className="font-medium text-gray-600">Price: </span>
                      <span className="text-2xl font-bold text-gray-900">
                        ${datas.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <button
              className="bg-blue-500 p-3 hover:bg-blue-600 text-white font-bold rounded-md w-[100px]"
              onClick={() => setIsSearch(false)}
            >
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminHome;
