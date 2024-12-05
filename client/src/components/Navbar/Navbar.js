import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMobile((prevState) => !prevState);
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`);
      setSearchQuery("");
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">ESL</Link>
      </div>

      <ul className={isMobile ? "nav-links-mobile active" : "nav-links"}>
        <li>
          <Link to="/" className="nav-item" onClick={() => setIsMobile(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/events"
            className="nav-item"
            onClick={() => setIsMobile(false)}
          >
            Events
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="nav-item"
            onClick={() => setIsMobile(false)}
          >
            Contact
          </Link>
        </li>
        <li>
          <div className="search-container">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search events..."
              className="search-input"
            />
            <button onClick={handleSearch} className="search-btn">
              Search
            </button>
          </div>
        </li>
      </ul>
      <div className="login-signup-btn">
        <Link to="/login" className="btn">
          Log In
        </Link>
        <Link to="/signup" className="btn">
          Sign Up
        </Link>
      </div>
      <button className="mobile-menu-icon" onClick={toggleMenu}>
        {isMobile ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
