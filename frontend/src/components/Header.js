import React from 'react';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import useAuth from "../hooks/useAuth";
import AuthContext from "../context/AuthContext";
import { useNavigate } from 'react-router-dom';



const Header = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { setUser } = useContext(AuthContext);
  
  const handleLogout = () => {
    setUser(false);
    navigate('/');
  }
  return (
    <header className="fixed top-0 w-full z-50 flex justify-between items-center p-4 border-b border-gray-200 bg-white">
      <Link to="/" className="text-2xl font-bold">Restview</Link>
      <nav className="flex flex-1 justify-end mr-4">
        <ul className="flex space-x-6">
          <li><Link to="/browse_rests" className="text-black font-medium">Discover</Link></li>
          <li><Link to="/reviews" className="text-black font-medium">Reviews</Link></li>
          <li><Link to="/browse_rests?sort=top-picks" className="text-black font-medium">Top Picks</Link></li>
          <li><Link to="#categories" className="text-black font-medium">Categories</Link></li>
        </ul>
      </nav>
      {!user && (
      <div className="flex space-x-4">
        <button className="px-4 py-2 border border-black text-black font-medium"><Link to="/signup">Sign Up</Link></button>
        <button className="px-4 py-2 bg-black text-white font-medium"><Link to="/login">Log In</Link></button>
      </div>)
      } 
      {user && (
        <div className="flex space-x-4">
          <button onClick={() => navigate(`/user/${user.id}`)} className="px-4 py-2 border border-black text-black font-medium">See Your Reviews</button>
          <button onClick = {handleLogout} className="px-4 py-2 bg-black text-white font-medium"><Link to="/logout">Log Out</Link></button>
        </div>
      )}
    </header>
  );
};

export default Header;
