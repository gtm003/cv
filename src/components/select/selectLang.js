import React, {useState} from 'react';
import { LANGS } from '../../data/constants';
import Icons from '../../data/icons';

function SelectLang() {
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
        <svg viewBox="0 0 32 32" height="100%"> 
          <use xlinkHref = "#select-arrow"/>
        </svg>
      </div>

      <ul className="select-list hidden">
        {
          LANGS.map((item) => (
            <li className="select-options" key = {item.id} onClick = {(e)=> OnChangeLang(item.id)}>
              <span>{item.title}</span>
              <div className="flag">
                <svg height="100%"> 
                  <use xlinkHref = {`#${item.id}`}/>
                </svg>
              </div>
            </li>
          ))
        }
      </ul>
      <Icons />
    </div>
  )
}

export { SelectLang };