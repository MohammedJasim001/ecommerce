import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Items } from "../MainPage/Main";
import SearchResults from "./SearchResults";
import { FaCartPlus } from "react-icons/fa";
import { MdLogout, MdVerified, MdAccountCircle } from "react-icons/md";
import axios from "axios";

const Navbar = () => {
  const [users, setUsers] = useState([]);
  

  const fetchUserData = async () => {
    const userId = localStorage.getItem("id");
    try {
      const response = await axios.get(`http://localhost:3000/users/${userId}`);
      setUsers(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [users]);

  const cartCount = users.cart ? Object.keys(users.cart).length : 0;

  const { data } = useContext(Items);
  const [input, setInput] = useState("");
  const [isLogine, setIsLogine] = useState(false);

  const handleLogout = () => {
    localStorage.clear("id");
    setIsLogine(false);
  };

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

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="h-24 bg-white shadow-md">
      <div className="flex justify-between items-center p-5">
        <h1 className="text-2xl font-bold text-gray-800">
          Luna<span className="text-green-500">Pets</span>
        </h1>

        <input
          className="border border-gray-300 w-full max-w-md h-10 rounded-lg px-4"
          placeholder="Search Products..."
          onChange={handleChange}
          value={input}
          type="text"
        />

        <div className="flex items-center space-x-5">
          {isLogine ? (
            <Link to="/orders" className="flex items-center">
              <MdVerified className="text-3xl text-gray-800" />
              <button className="hidden md:block ml-2">Orders</button>
            </Link>
          ) : (
            <Link to="/signin" className="flex items-center">
              <MdVerified className="text-3xl text-gray-800" />
              <button className="hidden md:block ml-2">Orders</button>
            </Link>
          )}

          {isLogine ? (
            <Link to="/cart" className="relative flex items-center">
             
              <FaCartPlus className="text-3xl text-gray-800" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 rounded-full bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
              
            </Link>
          ) : (
            <Link to="/signin" className="flex items-center">
              <FaCartPlus className="text-3xl text-gray-800" />
              
            </Link>
          )}

          {isLogine ? (
            <div className="flex items-center">
              <MdLogout onClick={handleLogout} className="text-3xl text-gray-800 cursor-pointer" />
              <button className="hidden md:block ml-2">LogOut</button>
            </div>
          ) : (
            <Link to="/signin" className="flex items-center">
              <MdAccountCircle className="text-3xl text-gray-800" />
              <button className="hidden md:block ml-2">LogIn</button>
            </Link>
          )}
        </div>
      </div>
      <div>
        <SearchResults results={results} setInput={setInput} />
      </div>
    </div>
  );
};

export default Navbar;
