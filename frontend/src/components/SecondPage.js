import React from 'react';

const url1 = "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const url2 = "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D"
const url3 = "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"

const SecondPage = () => {
  return (
    <section className="snap-start container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12">
        <div className="mb-8 md:mb-0">
          <h2 className="text-sm font-semibold text-gray-600 uppercase mb-1">Discover</h2>
          <h1 className="text-4xl font-bold mb-4">Delicious Restaurants Near You</h1>
          <p className="text-gray-700">Explore a wide selection of restaurants with our user-friendly website. Find the perfect spot for your next meal based on ratings and reviews from fellow food enthusiasts. Whether you're craving Italian, Asian, or American cuisine, we've got you covered.</p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img className="w-full h-48 object-cover" src={url3} alt="Restaurant" />
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-2">Top-Rated Restaurants</h2>
            <p className="text-gray-700 mb-4">Discover the best restaurants in town, handpicked for their exceptional quality and service.</p>
            <div className="flex justify-between items-center">
              <a href="#" className="text-black hover:underline">See Top restaurants</a>
              {/* <a href="#" className="text-black hover:underline">Sign Up</a> */}
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img className="w-full h-48 object-cover" src={url1} alt="Cuisine" />
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-2">Wide Variety of Cuisines</h2>
            <p className="text-gray-700 mb-4">From traditional favorites to exotic flavors, explore a diverse range of culinary delights.</p>
            <div className="flex justify-between items-center">
              <a href="#" className="text-black hover:underline">Choose your cuisine</a>
              {/* <a href="#" className="text-black hover:underline">Sign Up</a> */}
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img className="w-full h-48 object-cover" src={url2} alt="Interface" />
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-2">Easy-to-Use Interface</h2>
            <p className="text-gray-700 mb-4">Our intuitive website makes it simple to browse, search, and discover your next dining experience.</p>
            <div className="flex justify-between items-center">
              <a href="#" className="text-black hover:underline">Learn More</a>
              {/* <a href="#" className="text-black hover:underline">Sign Up</a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondPage;
