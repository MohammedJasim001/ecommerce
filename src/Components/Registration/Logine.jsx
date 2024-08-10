import axios from "axios";


export const AddPersonTO = async(data)=>{
   
     try{
    
      await  axios.post("http://localhost:3000/users",data)
   
     }catch(err){
        console.log("errr");
        
     }
}

export const CheckUSer = async ()=> {

}