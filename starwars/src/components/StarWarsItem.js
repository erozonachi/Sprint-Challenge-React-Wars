import React from 'react';
import List from './List';

const StarWarsItem = (props) => (
  <li className='war-item'>
    <h3>{props.item.name}</h3>
    <p>
      <span className='label'>Gender</span>
      <span className='val'>{props.item.gender}</span>
    </p>
    <p>
      <span className='label'>Height</span>
      <span className='val'>{props.item.height}</span>
    </p>
    <p>
      <span className='label'>Mass</span>
      <span className='val'>{props.item.mass}</span>
    </p>
    <p>
      <span className='label'>Birth Year</span>
      <span className='val'>{props.item.birth_year}</span>
    </p>
    <p>
      <span className='label'>Eye Color</span>
      <span className='val'>{props.item.eye_color}</span>
    </p>
    <p>
      <span className='label'>Hair Color</span>
      <span className='val'>{props.item.hair_color}</span>
    </p>
    <p>
      <span className='label'>Skin Color</span>
      <span className='val'>{props.item.skin_color}</span>
    </p>
    <List label='Film' itemList={props.item.films} />
    <List label='Specie' itemList={props.item.species} />
    <List label='Starship' itemList={props.item.starships} />
    <List label='Vehicle' itemList={props.item.vehicles} />
  </li>
);

export default StarWarsItem;
