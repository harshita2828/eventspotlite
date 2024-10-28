import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`);
      setSearchQuery('');
    }
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">ESL</h1>
      
      <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'} onClick={() => setIsMobile(false)}>
      <Link to="/" className="nav-item">Home</Link>
        <Link to="/events" className="nav-item">Events</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
      <div className="search-container">
        <input 
          type="text" 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
          placeholder="Search events..." 
          className="search-input"
        />
        <button onClick={handleSearch} className="search-btn">Search</button>
      </div>
        
        <button className='btn'>Log In</button>
        <button className='btn'>Sign Up</button>
      </ul>

      

      <button className="mobile-menu-icon" onClick={toggleMenu}>
        {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </button>
    </nav>
  );
};

export default Navbar;
