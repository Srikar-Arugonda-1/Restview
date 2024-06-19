import React from 'react';

const HeroSection = () => {
    const url = "https://www.visitdubai.com/-/media/gathercontent/poi/t/the-link/fallback-image/the-link-supplied-2024-4.jpg?rev=c9d03f27abf642cfbb473ab3bbfd9ccb&cx=0.5&cy=0.5&cw=1556&ch=690"
    
    const handleExplore = () => {
        window.location.href = "/browse_rests";
    }

    const handleSignup = () => {
        window.location.href = "/signup";
    }
    
  
    return (
    <section className="snap-start relative bg-gray-200 h-screen">
      <img 
        src={url} 
        alt="Hero" 
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 py-20 relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Discover the Best Restaurants in Town</h1>
        <p className="text-gray-200 mb-6">Explore a wide variety of restaurants and read honest reviews from fellow food enthusiasts.</p>
        <div className="space-x-4">
          <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800" onClick={handleExplore}>Explore</button>
          <button className="bg-white text-black border border-black px-6 py-2 rounded-md hover:bg-gray-100" onClick={handleSignup}>Sign Up</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
