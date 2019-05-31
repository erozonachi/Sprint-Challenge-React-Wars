import React from 'react';

const VehicleItem = (props) => (
  <li>
    <a href={props.url} target='_blank'>
      {props.label}
    </a>
  </li>
);

export default VehicleItem;
