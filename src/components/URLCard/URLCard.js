import './URLCard.css';
import React from 'react';

const URLCard = ({ title, id, short, long }) => {
  return(
    <div className='card'>
      <h3>{title}</h3>
      <a href={short} target="blank">{short}</a>
      <p>{long}</p>
    </div>
  )
}

export default URLCard;