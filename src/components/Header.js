import React from 'react';
import Search from './Search';
import './css/header.css';
function Header({ ad }) {
  return (
    <div className="header">
      <Search ad={ad} />
    </div>
  );
}

export default Header;
