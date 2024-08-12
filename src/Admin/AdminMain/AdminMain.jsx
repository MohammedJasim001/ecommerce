import React, { createContext, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'
import AdminHome from '../Home/AdminHome'
import Users from '../Home/Users'
import AdminProduct from '../Home/AdminProduct'
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
  
  },[])
  useEffect(()=>{
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
            <Route path='/adminhome/:url' element={<AdminHome/>}/>
            <Route path='/users' element={<Users/>}/>
            <Route path='/productadmin' element={<AdminProduct/>}/>
        </Routes>
        </Products.Provider>
    </div>
  )
}

export default AdminMain
