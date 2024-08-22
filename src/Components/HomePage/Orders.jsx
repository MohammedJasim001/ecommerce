import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import Navbar from "./Navbar";
import Footer from "./Footer";

const OrdersPage = () => {
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      const userId = localStorage.getItem("id");
      if (userId) {
        try {
          const response = await axios.get(
            `http://localhost:3000/users/${userId}`
          );
          setOrders(response.data.orderedProducts);
        } catch (err) {
          console.error(err);
          toast.error("Failed to fetch orders.");
        }
      }
    };

    fetchOrders();
  }, []);

  if (!orders) {
    return <div className="min-h-screen">Loading...</div>;
  }

  return (
    <div>
      <Navbar />

      <div className="container mx-auto p-4 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">My Orders</h1>
        {Object.keys(orders).length > 0 ? (
          <div className="flex flex-col gap-6">
            {Object.keys(orders).map((key, index) => {
              const order = orders[key];
              return (
                <div key={index} className="flex justify-around border p-4 rounded-lg shadow-lg">
                
                  
                  <div className="w-[25%]">
                    <div className="border shadow-lg rounded-lg pl-3 h-[50vh]">
                      <h2 className="text-xl font-bold text-center">Order Details</h2>
                      <div className="mt-2">
                        <p className="pt-3 font-sans text-lg">
                          Name: {order.orderDetails.name}
                        </p>
                        <p className="pt-3 font-sans text-lg">
                          Mobile Number: {order.orderDetails.mobilenumber}
                        </p>
                        <p className="pt-3 font-sans text-lg">
                          Address: {order.orderDetails.address}
                        </p>
                        <p className="pt-3 font-sans text-lg">
                          City: {order.orderDetails.city}
                        </p>
                        <p className="pt-3 font-sans text-lg">
                          State: {order.orderDetails.state}
                        </p>
                        <p className="pt-3 font-sans text-lg">
                          Payment Method: {order.orderDetails.payment}
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 border shadow-lg rounded-lg h-20 flex items-center justify-center">
                      <span className="text-lg">Total Amount:</span>
                      <span className="text-2xl font-bold">${order.totalPrice}</span>
                    </div>
                  </div>

                 
                  <div className="flex flex-col gap-4 w-[70%]">
                    {order.productData.map((product, idx) => (
                      <div
                        key={idx}
                        className="flex p-4 border rounded-lg shadow justify-between"
                      >
                        <div className="">
                          <h2 className="text-2xl font-semibold">{product.name}</h2>
                          <p>Quantity: {product.count}</p>
                          <p>Price: ${product.price}</p>
                        </div>
                        <div className="">
                          <img className="w-28" src={product.image} alt={product.name} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p>No orders found.</p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default OrdersPage;
