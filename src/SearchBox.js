// src/SearchBox.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBox = ({ placeholder, handleChange }) => (
  <div className="search-box">
    <input
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
      className="search-input"
    />
    <FontAwesomeIcon icon={faSearch} className="search-icon" />
  </div>
);

export default SearchBox;
