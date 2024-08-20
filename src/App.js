

import { Toaster } from 'sonner';
import './App.css';
import Main from './Components/MainPage/Main';
import AdminMain from './Admin/AdminMain/AdminMain';
import { useEffect, useState } from 'react';






function App() {

  const [adm,setAdm]=useState()
  useEffect(()=>{
      const admin = localStorage.getItem("admin")
      if(admin){
       setAdm(admin) 
      }
  },[])
  return (
    <div className="App">
<Toaster richColors position='bottom-right'/>
{adm &&
    <AdminMain/> }
    
      <Main/>
     
     
    </div>
  );
}

export default App;
