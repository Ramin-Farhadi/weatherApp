import React from 'react';
import './css/banner.css';

const Banner = ({ data }) => {
  return (
    <div className="banner">
      <span>{data.city_name}</span>
      <span>{data.country_code}</span>
    </div>
  );
};

export default Banner;
