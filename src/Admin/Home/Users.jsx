import React, { useContext } from "react";

import { Products } from "../AdminMain/AdminMain";

const Users = () => {
  const { users } = useContext(Products);
  return (
    <div className="w-full overflow-x-auto absolute top-0 bottom-0 bg-slate-200">
  <ul className="flex items-center justify-around text-lg font-bold bg-gray-200 h-16">
    <li className="px-4 py-2">ID</li>
    <li className="px-4 py-2">Name</li>
    <li className="px-4 py-2">Email</li>
    <li className="px-4 py-2">Password</li>
    <li className="px-4 py-2">Actions</li>
  </ul>
  {users.map((user) => (
    <div
      key={user.id}
      className="flex items-center justify-around bg-white hover:bg-gray-50 border-b last:border-none p-4 text-sm sm:text-base"
    >
      <div className="px-4 py-2">{user.id}</div>
      <div className="px-4 py-2">{user.name}</div>
      <div className="px-4 py-2">{user.email}</div>
      <div className="px-4 py-2">{user.password}</div>
      <div className="flex space-x-2 px-4 py-2">
        <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">
          Remove
        </button>
        <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition">
          Block
        </button>
      </div>
    </div>
  ))}
</div>

  );
};

export default Users;
