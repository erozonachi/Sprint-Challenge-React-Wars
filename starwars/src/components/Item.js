import React from 'react';

const Item = (props) => (
  <li>
    <a href={props.url} target='_blank' rel="noopener noreferrer">
      {props.label}
    </a>
  </li>
);

export default Item;
