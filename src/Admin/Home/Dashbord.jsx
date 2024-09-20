import React, { useContext, useEffect, useState } from 'react';
import { Products } from '../AdminMain/AdminMain';
import axios from 'axios';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Dashboard = () => {
  const { users } = useContext(Products);
  const [data, setData] = useState([]);
  const [totalProfit, setTotalProfit] = useState(0);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/products");
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {

    fetchProducts();
  
    const totalProfit = users.reduce((total, user) => {
      if (user.orderedProducts && Object.keys(user.orderedProducts).length > 0) {
        const userProfit = Object.keys(user.orderedProducts).reduce((sum, orderKey) => {
          const order = user.orderedProducts[orderKey];
 
          const amount = parseFloat(order.amount);
          if (!isNaN(amount)) {
            return sum + order.totalPrice;
          } else {
            console.warn(`Invalid amount found in order for user: ${user.name}`, order);
            return order.totalPrice;
          }

        }, 0);
        return total + userProfit;
      }
      return total;
    }, 0);
 
  
    // Update total profit state
    setTotalProfit(totalProfit);
  }, [users]);
  
  
  

  // Calculate total orders
  const totalOrders = users.reduce((acc, user) => {
    if (user.orderedProducts && Object.keys(user.orderedProducts).length > 0) {
      return acc + Object.keys(user.orderedProducts).length;
    }
    return acc;
  }, 0);

  const totalUsers = users.filter((user) => !user.admin).length;

  
  const productChartData = {
    labels: ['Total Products'],
    datasets: [
      {
        label: 'Products',
        data: [data.length],
        backgroundColor: 'rgba(34, 197, 94, 0.5)',
        borderColor: 'rgba(34, 197, 94, 1)',
        borderWidth: 1,
      },
    ],
  };

  const orderChartData = {
    labels: ['Total Orders'],
    datasets: [
      {
        label: 'Orders',
        data: [totalOrders],
        backgroundColor: 'rgba(250, 204, 21, 0.5)', 
        borderColor: 'rgba(250, 204, 21, 1)',
        borderWidth: 1,
      },
    ],
  };

  const userChartData = {
    labels: ['Total Users'],
    datasets: [
      {
        label: 'Users',
        data: [totalUsers],
        backgroundColor: 'rgba(59, 130, 246, 0.5)', 
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1,
      },
    ],
  };

  const profitChartData = {
    labels: ['Total Profit'],
    datasets: [
      {
        label: 'Profit',
        data: [totalProfit],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Total Products */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <h2 className="text-xl font-semibold text-gray-800">Total Products</h2>
            <p className="text-gray-600 mt-2">{data.length}</p>
            <div className="w-full max-w-xs">
              <Bar data={productChartData} options={{ responsive: true, plugins: { legend: { display: true } } }} />
            </div>
          </div>

          {/* Total Orders */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <h2 className="text-xl font-semibold text-gray-800">Total Orders</h2>
            <p className="text-gray-600 mt-2">{totalOrders}</p>
            <div className="w-full max-w-xs">
              <Pie data={orderChartData} options={{ responsive: true, plugins: { legend: { display: true } } }} />
            </div>
          </div>

          {/* Total Users */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <h2 className="text-xl font-semibold text-gray-800">Total Users</h2>
            <p className="text-gray-600 mt-2">{totalUsers}</p>
            <div className="w-full max-w-xs">
              <Bar data={userChartData} options={{ responsive: true, plugins: { legend: { display: true } } }} />
            </div>
          </div>

          {/* Total Profit */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <h2 className="text-xl font-semibold text-gray-800">Total Profit</h2>
            <p className="text-gray-600 mt-2">${totalProfit.toFixed(2)}</p>
            <div className="w-full max-w-xs">
              <Bar data={profitChartData} options={{ responsive: true, plugins: { legend: { display: true } } }} />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Dashboard;
