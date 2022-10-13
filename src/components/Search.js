import React from 'react';
import './css/search.css';
import { FaSistrix } from 'react-icons/fa';
function Search() {
  return (
    <div className="search">
      <input type="text" placeholder="Search City" />
      <FaSistrix
        style={{ position: 'absolute', color: 'white', right: 5, top: 7 }}
      />
    </div>
  );
}

export default Search;
