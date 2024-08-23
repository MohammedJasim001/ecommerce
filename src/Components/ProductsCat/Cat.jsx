import React, { useContext} from 'react'
import ProductsCat from './ProductsCat'
import { Items } from '../MainPage/Main'
import Navbar from '../HomePage/Navbar'
import Footer from '../HomePage/Footer'
import cat from '../Assets/cat.webp'

const Cat = () => {
  const {data} = useContext(Items)
  return (
    
    <div>
      <Navbar/>
       <div className='pt-5 bg-gray-100'>
      {/* <h1 className="md:ml-10 text-3xl font-sans font-bold ">Cat </h1> */}
    <div className='flex items-center justify-center mt-5 md:mt-5'>
      <img className='w-[99%]'
        src={cat} alt="" />
    </div>
     <div  className='grid grid-cols-2 md:grid-cols-5 gap-3 pt-10 '>
      
        {data.filter((item)=>item.category==='Cat').map((products)=>(
          <ProductsCat key={products.id} products={products}/>
        ))}
     </div>
      
    </div>
    <Footer/>
    </div>

   
  )
}

export default Cat
