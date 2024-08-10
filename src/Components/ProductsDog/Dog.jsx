import React, { useContext} from 'react'

import DogProducts from './DogProducts'
import { Items } from '../MainPage/Main'
const Dog = () => {
  const {data,users} = useContext(Items)
  return (
    <div >
      <h1 className="mb-2 text-3xl font-bold tracking-tight md:ml-10">Dog</h1>
 
    <div className='grid grid-cols-2 md:grid-cols-5 gap-3 pt-10 '>
      {data.filter((item)=>item.category==='Dog').map((dogproducts)=>(
        <DogProducts key={dogproducts.id} products={dogproducts}/>
      ))}
    </div>
      
      
    </div>
  )
}

export default Dog
