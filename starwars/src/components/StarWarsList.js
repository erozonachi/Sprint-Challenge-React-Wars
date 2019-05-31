import React from 'react';
import StarWarsItem from './StarWarsItem';

const StarWarsList = (props) => (
  <div className='war-list'>
    <ul>
      {props.warItems.map(item => <StarWarsItem item={item} />)}
    </ul>
  </div>
);

export default StarWarsList;
