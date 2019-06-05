import React from 'react';
import './StarWars.css';
import StarWarsItem from './StarWarsItem';

const StarWarsList = (props) => (
  <div className='war-list'>
    <ul>
      {props.warItems.map((item, index) => <StarWarsItem key={index+1} item={item} />)}
    </ul>
  </div>
);

export default StarWarsList;
