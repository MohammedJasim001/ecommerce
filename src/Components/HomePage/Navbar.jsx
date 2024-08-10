import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import signout from '../Assets/signout.png'
import admin from "../Assets/admin-icon.png";
import cart from "../Assets/cart-icon.png";
import { Items } from "../MainPage/Main";
import SearchResults from "./SearchResults";
import { AddCarts } from "../AllProducts/Addcart";

const Navbar = () => {
  const {data,users}=useContext(Items)
  const [input,setInput]=useState('')
  const [isLogine,setIsLogine] = useState(false)
  function handleLogout(){
    localStorage.clear("id")
    setIsLogine(false)
  }
  useEffect(()=>{
      if(localStorage.getItem("id")){
        setIsLogine(true)
      }
  },[isLogine])

  const results=data.filter((product)=>{
    return  input&&product&&product.name&&product.name.toLowerCase().includes(input.toLowerCase())
    
  })
   
   console.log(results);

  function handleChange(e){
    setInput(e.target.value) 
    
  }


  return (
<div className="h-24">
<div className="flex  justify-around items-center  p-5 h-max ">
    <h1 className="h-10 sm:h-14  sm:text-2xl font-bold text-gray-800 p-3 bg-white rounded-lg shadow-lg ">
      Luna<span className="text-green-500">Pets</span>
    </h1>
  
    <input
      className="border border-black flex-grow max-w-[60%] h-10 sm:h-14 rounded-lg mx-2 pl-4"
      placeholder="Search Products..."
      onChange={handleChange}
      value={input}
      type="text"
    />
       
  
    <div className="flex items-center space-x-4 ">
     {isLogine ?  
     <div className="flex items-center">
        <img onClick={handleLogout}
          className="w-6 md:w-8 ml-2 " src={signout} alt="admin" />
        <h2 className="hidden sm:block ml-2">LogOut</h2>
   

     </div>
     
     
     :
       <Link to="/signin" className="flex items-center">
       <img className="w-6 md:w-8 ml-2 " src={admin} alt="admin" />
       <h2 className="hidden sm:block ml-2">LogIn</h2>
     </Link>
     }
     
     {isLogine?
  
      <Link to="/cart" className="flex items-center ml-4">
        <img className="w-6 sm:w-8"  src={cart} alt="cart" />
        <h2 className="hidden sm:block ml-2">Cart</h2>
      </Link>
      :
      <Link to="/signin" className="flex items-center ml-4">
        <img className="w-6 sm:w-8" src={cart} alt="cart" />
        <h2 className="hidden sm:block ml-2">Cart</h2>
      </Link>
      }     
    </div>
  </div>
  <div >
    <SearchResults results={results} setInput={setInput}/>
  </div>
</div>
  
  );
};

export default Navbar;
