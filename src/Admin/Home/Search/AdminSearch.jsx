import React, { useState } from "react";
import { useNavigate } from "react-router";

const AdminSearch = ({ result, setInput }) => {
  const navigate = useNavigate();

    const [isOpen,setIsOpen]= useState(false)
    const [items,setItems]= useState([])

  function handleClick(details) {
    setItems([details])
    console.log(details);
    setIsOpen(true)
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
        <div>
            <div className="flex flex-col gap-8">
              <div className="p-4 md:p-8 bg-gray-50">
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
                        <p className="text-gray-700 mt-2">
                          {datas.description}
                        </p>
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
                          <span className="font-medium text-gray-600">
                            Brand:{" "}
                          </span>
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
                          <span className="font-medium text-gray-600">
                            Price:{" "}
                          </span>
                          <span className="text-2xl font-bold text-gray-900">
                            ${datas.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="bg-blue-500 p-3 hover:bg-blue-600 text-white font-bold  rounded-md w-[100px] "
                onClick={() => setIsOpen(false)}
              >
                Back
              </button>
            </div>
          </div>
      
    </div>
  );
};

export default AdminSearch;
