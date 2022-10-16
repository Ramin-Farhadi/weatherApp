import React from 'react';
import './css/tile.css';

const Tile = ({ date, lTemp, hTemp, icon }) => {
  let day = '';
  switch (date.getDay()) {
    case 0:
      day = 'Sunday';
      break;
    case 1:
      day = 'Monday';
      break;
    case 2:
      day = 'Tuesday';
      break;
    case 3:
      day = 'Wednesday';
      break;
    case 4:
      day = 'Thursday';
      break;
    case 5:
      day = 'Friday';
      break;
    case 6:
      day = 'Saturday';
  }
  console.log(hTemp, lTemp);
  return (
    <div className="tile">
      {day}
      <br />
      {/* {date.getDate()} */}

      <img
        className="icon"
        src={`https://www.weatherbit.io/static/img/icons/${icon}.png`}
      />

      <div className="highLow">
        <span className="highTemp">
          {hTemp}
          {'\u00B0'}
        </span>
        <span className="lowTemp">
          {lTemp}
          {'\u00B0'}
        </span>
      </div>
    </div>
  );
};

export default Tile;
