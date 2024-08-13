import React from 'react'

const Dashbord = () => {
  return (
    <div>
      <main className="flex-1 p-6">
          <h1 className="text-2xl font-semibold text-gray-700">Welcome, Admin!</h1>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-gray-800">Total Sales</h2>
              <p className="text-gray-600 mt-2">$12,000</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-gray-800">Total Orders</h2>
              <p className="text-gray-600 mt-2">150</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-gray-800">New Customers</h2>
              <p className="text-gray-600 mt-2">20</p>
            </div>
          </div>
        </main>
    </div>
  )
}

export default Dashbord
