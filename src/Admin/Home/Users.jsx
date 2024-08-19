import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);

  const fn = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      setUsers(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fn();
  }, []);

  const handleRemove = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      fn();
    } catch (err) {
      console.log(err);
    }
  };
const handleUnBlock = async(id)=>{
  try {
    await axios.patch(`http://localhost:3000/users/${id}`, { blocked: false });
    fn();
  } catch (err) {
    console.log(err);
  }
}
  const handleBlock = async (id) => {
    try {
      await axios.patch(`http://localhost:3000/users/${id}`, { blocked: true });
      fn();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mt-8 w-full">
      <ul className="flex items-center justify-between md:justify-around text-lg font-bold bg-gray-200 h-16 rounded-t-lg">
        <li className=" px-2 md:px-4 py-2 w-[10%] md:w-[10%] text-center">ID</li>
        <li className="px-2 md:px-4 py-2 w-[20%] md:w-[20%] text-center">Name</li>
        <li className=" px-2 md:px-4 py-2 w-[30%] text-center">Email</li>
        <li className="hidden md:block px-2 md:px-4 py-2 w-[20%] text-center">Password</li>
        <li className="px-2 md:px-4 py-2 w-[50%] md:w-[20%] text-center">Actions</li>
      </ul>

      {users.map((user) => (
        <div
          key={user.id}
          className="flex  items-center justify-between md:justify-around bg-white hover:bg-gray-50 border-b last:border-none py-4 text-xs md:text-sm  transition duration-300"
        >
          <div className=" px-2 sm:px-4 py-2 w-[10%] sm:w-[10%] text-center">
            {user.id}
          </div>
          <div className="px-2 md:px-4 py-2 w-[20%] sm:w-[20%] text-center truncate">
            {user.name}
          </div>
          <div className="px-2 md:px-4 py-2 w-[30%] text-center truncate">
            {user.email}
          </div>
          <div className="hidden md:block px-2 md:px-4 py-2 w-[20%] text-center truncate">
            {user.password}
          </div>
          <div className="flex space-x-2 px-2 md:px-4 py-2 justify-center w-[50%] md:w-[20%]">
            {user.admin !== true ? (
              <>
                <button
                  onClick={() => handleRemove(user.id)}
                  className="bg-red-500 text-white px-2 sm:px-3 py-1 rounded hover:bg-red-600 transition duration-300"
                >
                  Remove
                </button>

                {user.blocked  ? 
                  <button
                  onClick={() => handleUnBlock(user.id)}
                  className="bg-black text-white px-2 md:px-3 py-1 rounded hover:bg-gray-800 transition duration-300"
                >
                  Unblock
                </button> 
                : 
                <button
                  onClick={() => handleBlock(user.id)}
                  className="bg-yellow-500 text-white px-2 md:px-3 py-1 rounded hover:bg-yellow-600 transition duration-300"
                >
                  Block
                </button> }
              </>
            ) : (
              <div className="bg-blue-500 text-white py-1 px-3 rounded">Main Admin</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
