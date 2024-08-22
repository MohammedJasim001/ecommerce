import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Items } from "../MainPage/Main";
import SearchResults from "./SearchResults";
import { FaCartPlus } from "react-icons/fa";
import { MdLogout, MdVerified, MdAccountCircle } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { toast } from "sonner";
import { IoMdArrowRoundBack } from "react-icons/io";

const Navbar = () => {
  const navigate = useNavigate();
  const { data, cartCount, fetchUserData } = useContext(Items);
  const [input, setInput] = useState("");
  const [isLogine, setIsLogine] = useState(false);
  const [isDrop, setIsDrop] = useState(false);
  const [theUser, setTheUser] = useState([]);

  const fetchUser = async () => {
    const userId = localStorage.getItem("id");
    try {
      const response = await axios.get(`http://localhost:3000/users/${userId}`);
      setTheUser(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  // fetchUser();
  useEffect(() => {
    fetchUser();
    fetchUserData();
  }, [fetchUserData]);

  const cartCountSettings = Object.keys(cartCount).length;

  const handleLogout = () => {
    localStorage.clear();
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

  const handleDrop = () => {
    isDrop == false ? setIsDrop(true) : setIsDrop(false);
  };

  return (
    <div className="h-24 bg-white shadow-md">
      <div className="flex justify-between items-center py-5 pr-5">
        <div className="flex gap-3">
          <button 
            onClick={() => navigate(-1)}
            className="bg-black text-white  rounded-lg px-2"
          >
            <IoMdArrowRoundBack className="text-2xl "/>
          </button>
          <h1 className=" text-2xl font-bold text-gray-800 pr-3">
            Luna<span className="text-green-500">Pets</span>
          </h1>
        </div>

        <div className="relative flex items-center w-full max-w-md ">
          <input
            className="border border-gray-300 h-10 rounded-lg pl-10 pr-4 w-full" // Padding left added for space before the icon
            placeholder="Search Products..."
            onChange={handleChange}
            value={input}
            type="text"
          />
          <FaSearch className="absolute left-3 text-gray-500" />
        </div>

        <div className="flex items-center gap-2 md:gap-10">
          {isLogine && (
            <Link to="/orders" className="flex items-center ml-2">
              <MdVerified className="text-2xl md:text-4xl text-gray-800" />
              <button className="hidden md:block ml-2">Orders</button>
            </Link>
          )}

          {isLogine ? (
            <Link to="/cart" className="relative flex items-center">
              <FaCartPlus className="text-2xl md:text-4xl text-gray-800" />
              <span className="absolute -top-2 -right-2 rounded-full bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center">
                {cartCountSettings}
              </span>
            </Link>
          ) : (
            <FaCartPlus
              onClick={() => toast.warning("Please Login")}
              className="text-2xl md:text-4xl text-gray-800"
            />
          )}

          {isLogine ? (
            <div className="flex items-center gap-2 md:gap-10">
              <div onClick={handleLogout} className="flex items-center">
                <MdLogout className="text-2xl md:text-4xl text-gray-800 cursor-pointer" />
                <button className="hidden md:block ml-2">LogOut</button>
              </div>

              <button
                className="rounded-full bg-blue-950 w-[25px] md:w-[40px] h-[25px] md:h-[40px] text-white md:text-xl"
                onClick={handleDrop}
              >
                {theUser.name ? theUser.name.trim().toUpperCase()[0] : ""}
              </button>
            </div>
          ) : (
            <Link to="/signin" className="flex items-center">
              <MdAccountCircle className="text-2xl md:text-4xl text-gray-800" />
              <button className="hidden md:block ml-2">LogIn</button>
            </Link>
          )}
        </div>
      </div>
      {isDrop && isLogine && (
        <div className="bg-gray-400 fixed right-5 w-[250px] h-[250px] top-20 rounded-md flex flex-col items-center justify-around shadow-lg p-4 z-50">
          <div className="rounded-full bg-blue-950 w-[60px] h-[60px] flex items-center justify-center text-white text-2xl shadow-md">
            {theUser.name ? theUser.name.trim().toUpperCase()[0] : ""}
          </div>

          <div className="flex flex-col items-center space-y-1 pt-3">
            <div className="text-xl font-sans font-semibold text-gray-900">
              Hi, {theUser.name}
            </div>
            <div className="text-lg font-sans font-medium text-gray-800">
              {theUser.email}
            </div>
          </div>
          <div>
            {theUser.admin === true && (
              <button
                onClick={() => navigate(`/admin/users`)}
                className="bg-blue-600 text-white rounded-lg p-2 text-lg"
              >
                Admin Page
              </button>
            )}
          </div>
        </div>
      )}
      <div>
        <SearchResults results={results} setInput={setInput} />
      </div>
    </div>
  );
};

export default Navbar;
