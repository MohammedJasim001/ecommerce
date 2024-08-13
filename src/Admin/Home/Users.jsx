import React, { useContext } from "react";
import { Products } from "../AdminMain/AdminMain";

const Users = () => {
  const { users } = useContext(Products);

  return (
    <div className="mt-8">
      {/* Header */}
      <ul className="flex items-center justify-around text-lg font-bold bg-gray-200 h-16 rounded-t-lg">
        <li className="px-4 py-2 w-[10%] text-center">ID</li>
        <li className="px-4 py-2 w-[20%] text-center">Name</li>
        <li className="px-4 py-2 w-[30%] text-center">Email</li>
        <li className="px-4 py-2 w-[20%] text-center">Password</li>
        <li className="px-4 py-2 w-[20%] text-center">Actions</li>
      </ul>

      {/* User Rows */}
      {users.map((user) => (
        <div
          key={user.id}
          className="flex items-center justify-around bg-white hover:bg-gray-50 border-b last:border-none py-4 text-sm sm:text-base transition duration-300"
        >
          <div className="px-4 py-2 w-[10%] text-center">{user.id}</div>
          <div className="px-4 py-2 w-[20%] text-center truncate">{user.name}</div>
          <div className="px-4 py-2 w-[30%] text-center truncate">{user.email}</div>
          <div className="px-4 py-2 w-[20%] text-center truncate">{user.password}</div>
          <div className="flex space-x-2 px-4 py-2 justify-center w-[20%]">
            <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-300">
              Remove
            </button>
            <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition duration-300">
              Block
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
