import React, {useState} from 'react';
import Flags from '../../data/flags';

const LANGS = [
  {
    id: 'RU',
    title: 'Русский',
  },
  {
    id: 'GB',
    title: 'English',
  },
  {
    id: 'IL',
    title: 'עִברִית',
  }
]

export default function SelectLang() {
  const [currentLang, setCurentLang] = useState('GB');

  function OnToggleSelect() {
    const ul = document.querySelector('ul');
    ul.classList.toggle('hidden');
  }

  function OnChangeLang(e) {
    setCurentLang(e);
    OnToggleSelect();
  }

  return (
    <div className='select-wrapper'>
      <div className="select-options" onClick = {()=> OnToggleSelect()}>
        <span>{`${currentLang}`}</span>
        <div className="flag">
          <svg viewBox="0 0 32 32" width="100%" height="100%"> 
            <use xlinkHref={`#${currentLang}`}/>
          </svg>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 32"><path d="M25.996 11.075c.158.156-4.811 4.816-4.969 4.972C20.87 16.204 16.315 21 16 21c-.315 0-4.87-4.796-5.027-4.953-.158-.156-5.127-4.816-4.97-4.972.158-.156 9.682-.02 9.997-.02.315 0 9.839-.136 9.996.02z" fill="#241c1c"/></svg>
      </div>

      <ul className="select-list hidden">
        {
          LANGS.map((item) => (
            <li className="select-options" key = {item.id} onClick = {(e)=> OnChangeLang(item.id)}>
              <span>{item.title}</span>
              <div className="flag">
                <svg viewBox="0 0 32 32" width="100%" height="100%"> 
                  <use xlinkHref = {`#${item.id}`}/>
                </svg>
              </div>
            </li>
          ))
        }
      </ul>
      <Flags />
    </div>
  )
}