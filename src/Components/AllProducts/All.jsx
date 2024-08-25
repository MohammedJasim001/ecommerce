
import React, { useContext } from 'react'
import AllProuducts from './AllProuducts'
import { Items } from '../MainPage/Main'
import Navbar from '../HomePage/Navbar'
import Footer from '../HomePage/Footer'

const All = () => {
  const {data} = useContext(Items)
 
  return (
    <div>
      <Navbar/>
      <h1 className="mb-2 text-3xl font-bold tracking-tight md:ml-10 mt-5">All Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 pt-10 md:ml-7">
                {data.map((products) => (
                    <AllProuducts key={products.id} products={products} />
                ))}
            </div>

            <Footer/>
    </div>
  )
}

export default All
