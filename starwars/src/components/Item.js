import React from 'react';

const Item = (props) => (
  <li>
    <a href={props.url} target='_blank'>
      {props.label}
    </a>
  </li>
);

export default Item;
