import React from 'react';
import Tile from './Tile';
import './css/smallSec.css';

const SmallSec = ({ data }) => {
  //LINE 7 is undefinded needs to be fixed asap.
  //   console.log(
  //     data.data.map((val, index) => {
  //       return val.datetime;
  //     })
  //   );
  let strDate = '';
  return (
    <div className="wrapItems">
      {data &&
        data.data.map((val, index) => {
          strDate = val.datetime.replaceAll('-', ',');
          // console.log(strDate);
          return (
            <Tile
              key={index}
              date={new Date(strDate)}
              lTemp={val.low_temp}
              hTemp={val.high_temp}
              icon={val.weather.icon}
            />
          );
        })}
    </div>
  );
};

export default SmallSec;
