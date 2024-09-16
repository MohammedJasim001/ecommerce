import React, { useState } from "react";
import { useNavigate } from "react-router";

const AdminSearch = ({ result, setInput }) => {
  const navigate = useNavigate();

    const [isOpen,setIsOpen]= useState(false)
    const [items,setItems]= useState([])

  function handleClick(details) {
    setItems([details])
    console.log(details);
    
  }

  return (
    <div className="relative w-full">
      
        <div className="absolute top-14 mt-1 w-[350px] bg-white z-40 rounded shadow-md right-60 ">
          {result.map((details, id) => (
            <div
              className="cursor-pointer hover:bg-gray-200 px-4 py-2"
              onClick={() =>handleClick(details)}
              key={id}
            >
              {details.name}
            </div>
          ))}
        </div>
      
    </div>
  );
};

export default AdminSearch;
