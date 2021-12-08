import React from 'react';
import './CountryTile.css';

export default function CountryTile({ iso2, name, continent }) {
  return (
    <>
      <div className="country-tile">
        <img className="image" src={`https://flagcdn.com/160x120/${iso2.toLowerCase()}.png`} />
        <div className="name">{name}</div>
        <div className="continent">{continent}</div>
      </div>
    </>
  );
}
