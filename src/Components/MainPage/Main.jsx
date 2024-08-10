import React, { createContext, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'
import Home from '../HomePage/Home'
import Registration from '../Registration/Registration'
import SignIn from '../Registration/SignIn'
import Cart from '../Cart/Cart'
import Cat from '../ProductsCat/Cat'
import Dog from '../ProductsDog/Dog'
import Navbar from '../HomePage/Navbar'
import Footer from '../HomePage/Footer'
import All from '../AllProducts/All'
import ProductLists from '../ProductLists/ProductLists'
import axios from 'axios'
import BuyNow from '../Cart/Buy/BuyNow'
import { ToastContainer } from 'react-toastify'



export const Items=createContext()


const Main = () => {
  

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
    <div className='bg-slate-100'>
       
      <Items.Provider value={{data,users}}>
      <Navbar/>
      <Routes>
      
        <Route path='/' element={<Home/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/cat' element={<Cat />}/>
        <Route path='/dog' element={<Dog/>}/>
        <Route path='/allproducts' element={<All/>}/>
        <Route path='/productdetails/:userId' element={<ProductLists/>}/>
        <Route path='/buynow' element={<BuyNow/>}/>
      
      </Routes>
      <ToastContainer/>
      <Footer/>
      </Items.Provider>
   
   
 
    </div>
  )
}

export default Main
