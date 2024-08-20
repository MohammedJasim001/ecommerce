import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Items } from "../MainPage/Main";
import { toast } from "sonner";

const SignIn = () => {
  const { users } = useContext(Items);
  const navigate = useNavigate();
  const [signin, setSignin] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!signin.email || !signin.password) {
      setError("Please enter email and password");
      return;
    }

    try {
      const user = users.find((e) => {
        return e.email === signin.email && e.password === signin.password;
      });
      if (!user) {
        toast.warning("Invalid login details");
      } else if (user.admin === true) {
        navigate("/admin/users");
        localStorage.setItem("admin", true);
        localStorage.setItem("id", user.id);
        window.location.reload();
        toast.success("Login successful");
      } else {
        if (!user.blocked) {
          localStorage.setItem("id", user.id);
          navigate("/");
          window.location.reload();
          toast.success("Login successful");
        } else {
          alert("You are blocked");
        }
      }
    } catch (err) {
      console.log("Error:", err);
    }
  };

  const handleChange = (e) => {
    setSignin({
      ...signin,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-green-600 p-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-8 space-y-6 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-gray-800">Sign In</h2>
        {error && <div className="text-red-600 mb-4">{error}</div>}
        <input
          className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={signin.email}
        />
        <input
          className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={signin.password}
        />
        <button className="bg-blue-500 text-white py-3 w-full rounded-lg hover:bg-blue-600 transition duration-300 font-semibold">
          Sign In
        </button>
      </form>

      <div className="mt-8 text-center">
        <h2 className="text-white text-lg">Don't have an account?</h2>
        <Link to={"/registration"}>
          <button className="bg-white text-blue-500 py-3 px-8 rounded-lg mt-4 font-semibold hover:bg-gray-100 transition duration-300">
            Create an account
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
