import React from 'react';
import Item from './Item';

const List = (props) => (
  <div className='item-list'>
    <h3>{props.label}s</h3>
    <ul>
      {props.itemList.map((item, index) => 
        <Item url={item} label={`${props.label} ${index + 1}`} />
      )}
    </ul>
  </div>
);

export default List;
