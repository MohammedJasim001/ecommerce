import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Items } from "../MainPage/Main";
import SearchResults from "./SearchResults";
import { FaCartPlus } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { IoLogInOutline } from "react-icons/io5";
import { MdVerified } from "react-icons/md";

const Navbar = () => {
  const { data } = useContext(Items);
  const [input, setInput] = useState("");
  const [isLogine, setIsLogine] = useState(false);
  function handleLogout() {
    localStorage.clear("id");
    setIsLogine(false);
  }
  useEffect(() => {
    if (localStorage.getItem("id")) {
      setIsLogine(true);
    }
  }, [isLogine]);

  const results = data.filter((product) => {
    return (
      input &&
      product &&
      product.name &&
      product.name.toLowerCase().includes(input.toLowerCase())
    );
  });

  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
    <div className="h-24">
      <div className="flex  justify-around items-center  p-5 h-max ">
        <h1 className="h-10 sm:h-14  sm:text-2xl font-bold text-gray-800 p-3 bg-white rounded-lg shadow-lg ">
          Luna<span className="text-green-500">Pets</span>
        </h1>

        <input
          className="border border-black flex-grow w-[25%] md:max-w-[50%] h-10 sm:h-14 rounded-lg mx-2 pl-4"
          placeholder="Search Products..."
          onChange={handleChange}
          value={input}
          type="text"
        />

        <div className="flex items-center space-x-5">
          {isLogine ? 
            <Link to={'/orders'}>
           
            <div className="flex">
              <MdVerified  className="text-3xl" />
              <button className="hidden md:block">Orders</button>
            </div>
            </Link>
           : 
           <Link to={'/signin'}>
            <div className="flex">
              <MdVerified  className="text-3xl" />
              <button className="hidden md:block">Orders</button>
            </div>
            </Link>
          }

          {isLogine ? (
            <Link to="/cart" className="flex items-center ">
              <FaCartPlus className="text-3xl" />
              <button className="hidden md:block ml-2">Cart</button>
            </Link>
          ) : (
            <Link to="/signin" className="flex items-center ">
              <FaCartPlus className="text-3xl" />
              <button className="hidden md:block ml-2">Cart</button>
            </Link>
          )}

          {isLogine ? (
            <div className="flex items-center">
              <MdLogout onClick={handleLogout} className="text-3xl" />

              <button className="hidden md:block ml-2">LogOut</button>
            </div>
          ) : (
            <Link to="/signin" className="flex items-center">
              <IoLogInOutline className="text-3xl" />
              <button className="hidden md:block ml-2">LogIn</button>
            </Link>
          )}
        </div>

        <div>{}</div>
      </div>
      <div>
        <SearchResults results={results} setInput={setInput} />
      </div>
    </div>
  );
};

export default Navbar;
