import React, { createContext, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'
import AdminHome from '../Home/AdminHome'

import axios from 'axios'

export const Products =createContext()

const AdminMain = () => {
    const [data,setData]=useState([])
const [users,setUsers]=useState([])

useEffect(()=>{
    axios.get('http://localhost:3000/products')
  
      .then(res=>{
        setData(res.data)
      })
      .catch(err=>console.log(err))

      axios.get("http://localhost:3000/users")
      .then(res=>{
        setUsers(res.data)
      })
      .catch(err=>console.log(err))
  
  },[])
 
    
  
  return (
    <div>
        <Products.Provider value={{data,users}}>
        <Routes>
            <Route path='/admin/:url' element={<AdminHome/>}/>
            
            
        </Routes>
        </Products.Provider>
    </div>
  )
}

export default AdminMain
