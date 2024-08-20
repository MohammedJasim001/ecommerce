import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddPersonTO } from "./Logine";
import { Items } from "../MainPage/Main";
import { toast } from "sonner";

const Registration = () => {
  const { users } = useContext(Items);
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(input));
    setIsSubmit(true);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      try {
        const user = users.find((e) => e.email === input.email);
        if (user) {
          toast.warning("E-mail already exists");
        } else {
          AddPersonTO({ ...input, cart: [] });
          toast.success("Registration Completed");
          navigate("/signin");
          window.location.reload()
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Enter a valid Email";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    }
    if (!values.cpassword) {
      errors.cpassword = "Confirm your password";
    } else if (values.cpassword !== values.password) {
      errors.cpassword = "Passwords don't match";
    }
    return errors;
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-green-600 p-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8 w-full max-w-md space-y-5"
      >
        <h2 className="text-2xl font-bold text-gray-800">Register</h2>

        <input
          className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Name"
          name="name"
          value={input.name}
          onChange={handleChange}
        />
        <span className="text-red-600 text-sm">{formErrors.name}</span>

        <input
          className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="email"
          placeholder="E-mail"
          name="email"
          value={input.email}
          onChange={handleChange}
        />
        <span className="text-red-600 text-sm">{formErrors.email}</span>

        <input
          className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="password"
          placeholder="Password"
          name="password"
          value={input.password}
          onChange={handleChange}
        />
        <span className="text-red-600 text-sm">{formErrors.password}</span>

        <input
          className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="password"
          placeholder="Confirm Password"
          name="cpassword"
          value={input.cpassword}
          onChange={handleChange}
        />
        <span className="text-red-600 text-sm">{formErrors.cpassword}</span>

        <button className="bg-blue-500 text-white py-3 w-full rounded-lg hover:bg-blue-600 transition duration-300">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Registration;
