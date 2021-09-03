import React from 'react';
import { CONTACTS } from '../../data/constants';

function Contacts() {
  return (
    <div className='contacts'>
    {
      CONTACTS.map((item) => (
        <div className='contact' key = {item.id}>
          <i className="material-icons icon">{item.id}</i>
          <span>{item.text}</span>
        </div>
      ))
    }
    </div>
  )
}

export { Contacts };