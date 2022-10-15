import React from 'react';
import Search from './Search';
import './css/header.css';
function Header({ ad, err }) {
  return (
    <div className="header">
      <Search ad={ad} err={err} />
    </div>
  );
}

export default Header;
