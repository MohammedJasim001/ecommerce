
import React, { useContext } from 'react'
import AllProuducts from './AllProuducts'
import { Items } from '../MainPage/Main'

const All = () => {
  const {data,users} = useContext(Items)
 
  return (
    <div>
      <h1 className="mb-2 text-3xl font-bold tracking-tight md:ml-10">All Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 pt-10">
                {data.map((products) => (
                    <AllProuducts key={products.id} products={products} />
                ))}
            </div>
    </div>
  )
}

export default All
