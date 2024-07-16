import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './index.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [searchField, setSearchField] = useState('');

    const handleSearchChange = (e) => {
    setSearchField(e.target.value);
};

    return ( 
    <nav className="navbar">
            <h1>BE DAMASCENE</h1>
        <div className="links">
        <Link to="/">Home</Link>
        <Link to="/lessons">Lessons</Link>
        <Link to="/community">Community</Link>
        <Link to="/culture">Culture</Link>
        <Link to="/account">Account</Link>
        <Link to="/contact">Contact Us</Link>
        </div>
        <div className="search-box">
        <input
            type="search"
                placeholder="Search..."
            onChange={handleSearchChange}
            className="search-input"
        />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
    </nav>    
    );
};

export default Navbar;
