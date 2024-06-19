import React from "react";

const searchIcon = "https://cdn-icons-png.flaticon.com/128/54/54481.png";
const shareIcon = "https://cdn-icons-png.flaticon.com/128/707/707675.png";
const reviewIcon = "https://cdn-icons-png.flaticon.com/128/9261/9261044.png";

const ThirdPage = () => {
  return (
    <section className="snap-start">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Find, Read, and Review Restaurants with Ease
        </h1>
        <p className="text-gray-700 mb-8">
          Our colorful and user-friendly website allows you to easily find
          restaurants, read reviews from other users, and share your own dining
          experiences. Whether you're looking for a new spot to try or want to
          share your thoughts on a recent meal, we've got you covered.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
            Get Started
          </button>
          <button className="text-black border border-black px-4 py-2 rounded-md hover:bg-gray-100">
            Learn More
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-3 text-center">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="mb-4">
              <img className="w-20 h-20 mx-auto" src={searchIcon} alt="Icon" />
            </div>
            <h2 className="text-lg font-semibold mb-2">
              Find Restaurants Near You
            </h2>
            <p className="text-gray-700 mb-4">
              Search for restaurants based on your location and preferences.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="mb-4">
              <img className="w-20 h-20 mx-auto" src={reviewIcon} alt="Icon" />
            </div>
            <h2 className="text-lg font-semibold mb-2">
              Read Reviews from Real Diners
            </h2>
            <p className="text-gray-700 mb-4">
              Get insights from other diners' experiences and make informed
              decisions.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="mb-4">
              <img className="w-20 h-20 mx-auto" src={shareIcon} alt="Icon" />
            </div>
            <h2 className="text-lg font-semibold mb-2">
              Share Your Dining Experiences
            </h2>
            <p className="text-gray-700 mb-4">
              Leave your own reviews and help others discover great restaurants.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdPage;
