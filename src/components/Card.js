import React from 'react';
import './css/card.css';
import Banner from './Banner';
import SmallSec from './SmallSec';

function Card({ data }) {
  return (
    <div className="card">
      <Banner />
      <SmallSec data={data} />
    </div>
  );
}

export default Card;
