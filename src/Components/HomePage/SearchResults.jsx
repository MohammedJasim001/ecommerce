import React from 'react'
import { useNavigate } from 'react-router'

const SearchResults = ({results,setInput}) => {
    const navigate=useNavigate()

    function handleClick(details){
        navigate(`/productdetails/${details.id}`)
        setInput("")
    }
   
  return (
    <div className='flex flex-col items-center text-black'>
       
        {results.map((details,id)=>{
            return <div className='flex items-center  border w-[40%] justify-center bg-white z-10' 
            onClick={()=>handleClick(details)}
            key={id}>
                {details.name}
               
            </div>
        })}
      
    </div>
  )
}

export default SearchResults
