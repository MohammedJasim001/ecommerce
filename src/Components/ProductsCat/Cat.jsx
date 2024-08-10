import React, { useContext} from 'react'
import ProductsCat from './ProductsCat'
import { Items } from '../MainPage/Main'

const Cat = () => {
  const {data,users} = useContext(Items)
  return (
    <div className='pt-5 bg-gray-100'>
      <h1 className="md:ml-10 text-3xl font-sans font-bold ">Cat </h1>
    
     <div  className='grid grid-cols-2 md:grid-cols-5 gap-3 pt-10 '>
      
        {data.filter((item)=>item.category==='Cat').map((products)=>(
          <ProductsCat key={products.id} products={products}/>
        ))}
     </div>
      
    </div>
  )
}

export default Cat
