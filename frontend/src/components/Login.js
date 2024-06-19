import React, { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({})
  const {user, setUser} = useAuth();
  const navigate = useNavigate();


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
        const res =await axios.post(`http://localhost:5000/api/login`, formData);
        console.log(res);
        localStorage.setItem("token", res.data.token);
        setUser(true);
        toast.success("Successful login!!", {
            position: "top-center",
        });
        console.log("user", user);
        navigate('/');

    } catch (err) {
      console.error("error Logging in:", err);
      toast.error("Invalid credentials", {
        position: "top-center",
      });
      const newErrors = {};
        if (err.response.data.message) {
          if (err.response.data.message.includes("Invalid email or password")) {
            newErrors.error = "Invalid email or password";
          } 
        }
        setErrors(newErrors);
    }
  };

  return (
    <div className="snap-start flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <p className="mb-4 text-center">
          You are a step away from something great!
        </p>
        <form onSubmit={handleSubmit}>
        <div className="mb-4">
            <label
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
          {errors.error && <p className="text-red-500 text-xs italic">{errors.error}</p>}
          </div>
          
          <button
            type="submit"
            className="w-full bg-gray-500 text-white py-2 rounded-md hover:bg-gray-700 transition duration-200"
          >
            Login
          </button>
          <p className="mt-4 text-center">
            <p className="text-gray-500">Havent registered yet?</p> 
            <a href="/signup" className="text-black-600 hover:underline">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
