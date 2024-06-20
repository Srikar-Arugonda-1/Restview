import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const ReviewForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    rating: '',
    review: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  	const restId = window.location.pathname.split("/")[3];
  	console.log(formData);
	  try {
	  	const res = await axios.post(`http://localhost:5000/api/add_review/${restId}`, formData);
	  	console.log(res);
      toast.success("Form submitted!!", {
        position: "top-center",
      });
      navigate('/browse_rests');
    } catch (err) {
      console.error("Error submitting review:", err);
    }
  };

  return (
    <div className="snap-start container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mt-8 mb-8">Submit Your Review</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 shadow-md rounded-lg">
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-900 rounded-md shadow-sm focus:border-black focus:ring-black"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Rating</label>
          <select
            name="rating"
            id="rating"
            value={formData.rating}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-900 rounded-md shadow-sm focus:border-black focus:ring-black"
            required
          >
            <option value="">Select a rating...</option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="review" className="block text-sm font-medium text-gray-700">Review</label>
          <textarea
            name="review"
            id="review"
            rows="4"
            value={formData.review}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-900 rounded-md shadow-sm focus:border-black focus:ring-black"
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button type="submit" className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
