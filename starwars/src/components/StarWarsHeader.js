import React from 'react';

const StarWarsHeader = (props) => (
  <div className='header-container'>
    <h1 className="Header">React Wars</h1>
    <div className='button-group'>
      <button onClick={() => props.prevHandler()}>Previous</button>
      <button onClick={() => props.nextHandler()}>Next</button>
    </div>
  </div>
);

export default StarWarsHeader;
