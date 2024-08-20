import React, { useEffect, useState } from "react";
import axios from "axios";

const UserDetailsModal = ({ isOpen, onClose, user }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-[#5c6061] rounded-lg p-8 w-full md:w-[700px] max-h-[80vh] overflow-y-auto gap-5 text-white font-sans">
        <div className="bg-[#3b82f6] p-2 rounded-lg">
          <h2 className="text-xl font-bold mb-4">User Details</h2>
          <div>
            <span className="font-bold">ID:</span> {user.id}
          </div>
          <div>
            <span className="font-bold">Name:</span> {user.name}
          </div>
          <div>
            <span className="font-bold">Email:</span> {user.email}
          </div>
          <div>
            <span className="font-bold">Blocked:</span>{" "}
            {user.blocked ? "Yes" : "No"}
          </div>
        </div>
        <div className="bg-[#3b82f6] p-2 mt-2 rounded-lg">
          <h3 className="mt-4 text-lg font-bold">Ordered Products</h3>
          {user.orderedProducts?.productData.map((product) => (
            <div key={product.id} className="mt-2 bg-[#10b981] p-2 rounded-lg">
              <div>
                <span className="font-bold">Product Name:</span> {product.name}
              </div>
              <div>
                <span className="font-bold">Category:</span> {product.category}
              </div>
              <div>
                <span className="font-bold">Price:</span> ${product.price}
              </div>
              <div>
                <span className="font-bold">Quantity:</span> {product.qty}
              </div>
              <div>
                <span className="font-bold">Count</span> {product.count}
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[#3b82f6] p-2 mt-2 rounded-lg">
          <h3 className="mt-4 text-lg font-bold">Order Details</h3>
          <div>
            <span className="font-bold">Recipient Name:</span>{" "}
            {user.orderedProducts?.orderDetails?.name}
          </div>
          <div>
            <span className="font-bold">Mobile Number:</span>{" "}
            {user.orderedProducts?.orderDetails?.mobilenumber}
          </div>
          <div>
            <span className="font-bold">Address:</span>{" "}
            {user.orderedProducts?.orderDetails?.address},{" "}
            {user.orderedProducts?.orderDetails?.city},{" "}
            {user.orderedProducts?.orderDetails?.state}
          </div>
          <div>
            <span className="font-bold">Payment Method:</span>{" "}
            {user.orderedProducts?.orderDetails?.payment}
          </div>
          <div>
            <span className="font-bold">Total Price:</span> $
            {user.orderedProducts?.totalPrice}
          </div>
        </div>
        <button
          onClick={onClose}
          className="mt-6 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const Users = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleUnBlock = async (id) => {
    try {
      await axios.patch(`http://localhost:3000/users/${id}`, {
        blocked: false,
      });
      fn();
    } catch (err) {
      console.log(err);
    }
  };

  const handleBlock = async (id) => {
    try {
      await axios.patch(`http://localhost:3000/users/${id}`, { blocked: true });
      fn();
    } catch (err) {
      console.log(err);
    }
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <div className="mt-8 w-full">
      <ul className="flex items-center justify-between md:justify-around text-lg font-bold bg-gray-200 h-16 rounded-t-lg">
        <li className=" px-2 md:px-4 py-2 w-[10%] md:w-[10%] text-center">
          ID
        </li>
        <li className="px-2 md:px-4 py-2 w-[20%] md:w-[20%] text-center">
          Name
        </li>
        <li className=" px-2 md:px-4 py-2 w-[30%] text-center">Email</li>
        <li className="px-2 md:px-4 py-2 w-[50%] md:w-[20%] text-center">
          Actions
        </li>
      </ul>

      {users.map((user) => (
        <div
          key={user.id}
          onClick={() => handleUserClick(user)}
          className="flex items-center justify-between md:justify-around bg-white hover:bg-gray-50 border-b last:border-none py-4 text-xs md:text-sm transition duration-300"
        >
          <div className="px-2 sm:px-4 py-2 w-[10%] sm:w-[10%] text-center">
            {user.id}
          </div>
          <div className="px-2 md:px-4 py-2 w-[20%] sm:w-[20%] text-center cursor-pointer truncate">
            {user.name}
          </div>
          <div className="px-2 md:px-4 py-2 w-[30%] text-center truncate">
            {user.email}
          </div>
          <div className="flex space-x-2 px-2 md:px-4 py-2 justify-center w-[50%] md:w-[20%]">
            {user.admin !== true ? (
              <>
                {user.blocked ? (
                  <button
                    onClick={() => handleUnBlock(user.id)}
                    className="bg-black text-white px-2 md:px-3 py-1 rounded hover:bg-gray-800 transition duration-300"
                  >
                    Unblock
                  </button>
                ) : (
                  <button
                    onClick={() => handleBlock(user.id)}
                    className="bg-yellow-500 text-white px-2 md:px-3 py-1 rounded hover:bg-yellow-600 transition duration-300"
                  >
                    Block
                  </button>
                )}
              </>
            ) : (
              <div className="bg-blue-500 text-white py-1 px-3 rounded">
                Main Admin
              </div>
            )}
          </div>
        </div>
      ))}
      <UserDetailsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        user={selectedUser}
      />
    </div>
  );
};

export default Users;
