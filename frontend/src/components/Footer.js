import React from 'react';

const Footer = () => {
  return (
    <footer className="snap-start bg-white border-t border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold">Restview</div>
            <p className="mt-4 text-gray-600">Join our newsletter and stay up to date with the latest features and releases.</p>
            <form className="mt-4 flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="p-2 border border-gray-300 rounded-l-md focus:outline-none"
              />
              <button 
                type="submit" 
                className="p-2 bg-purple-500 text-white rounded-r-md hover:bg-purple-700"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-2 text-gray-500 text-sm">By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</p>
          </div>
          <div className="flex flex-col items-center justify-center md:space-x-12">
            <div className="text-center  md:text-left">
              <h4 className="font-bold">Follow us</h4>
              <ul className="mt-2 space-y-2 ">
                <li><a href="#" className="text-gray-600 hover:underline flex items-center"><i className="fab fa-facebook mr-2"></i> Facebook</a></li>
                <li><a href="#" className="text-gray-600 hover:underline flex items-center"><i className="fab fa-instagram mr-2"></i> Instagram</a></li>
                <li><a href="#" className="text-gray-600 hover:underline flex items-center"><i className="fab fa-twitter mr-2"></i> X</a></li>
                <li><a href="#" className="text-gray-600 hover:underline flex items-center"><i className="fab fa-linkedin mr-2"></i> LinkedIn</a></li>
                <li><a href="#" className="text-gray-600 hover:underline flex items-center"><i className="fab fa-youtube mr-2"></i> Youtube</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-500 text-sm">
          <div>&copy; 2024 Restview. All rights reserved.</div>
          <div className="mt-2">
            <a href="#" className="hover:underline mx-2">Privacy Policy</a>
            <a href="#" className="hover:underline mx-2">Terms of Service</a>
            <a href="#" className="hover:underline mx-2">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
