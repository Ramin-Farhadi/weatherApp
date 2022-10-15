import React from 'react';
import Tile from './Tile';
import './css/smallSec.css';

const SmallSec = ({ data }) => {
  const weatherInfo = data.data;
  console.log(weatherInfo.datetime);
  return (
    <div className="wrapItems">
      {weatherInfo.map((val, index) => {
        <Tile key={index} date={val.datetime} />;
      })}
    </div>
  );
};

export default SmallSec;
