import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if(errors[e.target.name]) {
      setErrors({
        ...errors, 
        [e.target.name]: null,
      })
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
    try {
        const res = await axios.post(`http://localhost:5000/api/register`, formData);
		console.log(res);
        toast.success("Successful registering !!", {
            position: "top-center",
        });
    } catch (err) {
      console.error("error registering:", err);
        toast.error("Error registering !!", {
          position: "top-center",
        });
          const newErrors = {};
          if (err.response.data.message) {
            if (err.response.data.message.includes("Email already exists")) {
              newErrors.email = "Email already exists";
            } else if (err.response.data.message.includes("Username already exists")) {
              newErrors.username = "Username already exists";
            }
          }
          setErrors(newErrors);
    }
  };

  return (
    <div className="snap-start flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <p className="mb-4 text-center">
          You are a step away from something great!
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
            {errors.username && <p className="text-red-500 text-xs italic">{errors.username}</p>}
          </div>
          <div className="mb-4">
            <label
              for="email-address-icon"
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
            {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
            {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
          </div>
          
          <button
            type="submit"
            className="w-full bg-gray-500 text-white py-2 rounded-md hover:bg-gray-700 transition duration-200"
          >
            Sign Up
          </button>
          <p className="mt-4 text-center">
            <a href="/login" className="text-black-600 hover:underline">
              Log in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
