import React, {  useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AddPersonTO } from './Logine';
import { Items } from '../MainPage/Main';
import { toast } from 'sonner';


const Registration = () => {

  const {data,users}=useContext(Items)
  const navigate = useNavigate(); 
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(input));
    setIsSubmit(true);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      try{

        const user = users.find((e) => {
          return e.email === input.email;
        });
        if(user){
          toast.warning('E-mail already exist')
         }
         else{
          AddPersonTO({...input,cart:[]})
          toast.success('Registration Completed')
              navigate('/signin'); 
           }
           console.log(input);
        

       }
       catch(err){
        console.log(err)
       }
     

     }     
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value
    });
  };



  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = 'Name is required';
    }
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!regex.test(values.email)) {
      errors.email = 'Enter a valid Email';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 4) {
      errors.password = 'Password must be more than 4 characters';
    }
    if (!values.cpassword) {
      errors.cpassword = 'Confirm your password';
    } else if (values.cpassword !== values.password) {
      errors.cpassword = "Password didn't match";
    }
    return errors;
    
  };

  return (
    <div className='bg-red-100 h-[100vh] flex items-center justify-center absolute top-0 w-[100%] bottom-0'>
      <form onSubmit={handleSubmit}
        className='flex flex-col items-center w-[450px] h-[450px] justify-center rounded-md md:shadow-2xl bg-white'>
        <input className='border border-black h-12 w-[300px] rounded-md'
          type="text"
          placeholder='Name'
          name='name'
          value={input.name}
          onChange={handleChange} />
        <span className='text-red-600 text-sm'>{formErrors.name}</span>

        <input className='border border-black mt-5 h-12 w-[300px] rounded-md'
          type="email"
          placeholder='E-mail'
          name='email'
          value={input.email}
          onChange={handleChange} />
        <span className='text-red-600 text-sm'>{formErrors.email}</span>

        <input className='border border-black mt-5 h-12 w-[300px] rounded-md'
          type="password"
          placeholder='Password'
          name='password'
          value={input.password}
          onChange={handleChange} />
        <span className='text-red-600 text-sm'>{formErrors.password}</span>

        <input className='border border-black mt-5 h-12 w-[300px] rounded-md'
          type="password"
          placeholder='Confirm Password'
          name='cpassword'
          value={input.cpassword}
          onChange={handleChange} />
        <span className='text-red-600 text-sm'>{formErrors.cpassword}</span>

        <button className='bg-blue-500 h-10 w-20 mt-5 rounded-md'>Submit</button>
      </form>
    </div>
  );
}

export default Registration;
