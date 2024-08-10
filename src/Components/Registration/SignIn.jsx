import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Items } from '../MainPage/Main';
import { toast } from 'sonner';


const SignIn = () => {
  const {data,users}=useContext(Items)
  const navigate = useNavigate();
  const [loggine, setLoggine] = useState([]);
  const [signin, setSignin] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!signin.email || !signin.password) {
      setError('Please enter email and password');
      return;
    }

    try {
      const user = users.find((e) => {
        return e.email === signin.email && e.password === signin.password;
      });

      if (user) {
        localStorage.setItem("id", user.id);
        navigate("/");
        window.location.reload();
        toast.success('Login successful');
      } else {
        toast.warning('Invalid login Details');
      }
    } catch (err) {
      console.log("Error:", err);
    }
  };

  const handleChange = (e) => {
    setSignin({
      ...signin,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className='h-[100vh] flex flex-col items-center justify-center bg-red-100 absolute top-0 w-[100%] bottom-0'>
      <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center rounded-md md:shadow-2xl h-[300px] w-[500px] bg-white'>
        {error && <div className='text-red-600 mb-4'>{error}</div>}
        <input
          className='border border-black h-12 w-[300px] rounded-md'
          type="email"
          placeholder='Email'
          name='email'
          onChange={handleChange}
          value={signin.email}
        />
        <input
          onChange={handleChange}
          name='password'
          value={signin.password}
          className='border border-black h-12 w-[300px] rounded-md mt-6'
          type="password"
          placeholder='Password'
        />
        <button className='bg-blue-500 h-10 w-20 mt-5 rounded-md'>Sign In</button>
      </form>
      <div>
        <h2 className='text-xl mt-8'>Don't have an account?</h2>
        <Link to={'/registration'}>
          <button className='bg-blue-500 h-10 w-[200px] mt-5 rounded-md'>Create an account</button>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
