import React from 'react';
import { connect } from 'react-redux';
import { LANGS } from '../../data/constants';
import Icons from '../../data/icons';
import {onChangeLang} from '../../store/actionCreators/changeLang';

const SelectLangRedux = ({ currentLang, onChangeLangSecond }) => {

  function OnToggleSelect() {
    const ul = document.querySelector('ul');
    ul.classList.toggle('hidden');
  }

  function onChangeLang(e) {
    onChangeLangSecond(e);
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
          <use xlinkHref = "#select-arrow" className = "arrow"/>
        </svg>
      </div>

      <ul className="select-list hidden">
        {
          LANGS.map((item) => (
            <li className="select-options" key = {item.id} onClick = {(e)=> onChangeLang(item.id)}>
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

const mapStateToProps = (state) => ({
  currentLang: state.currentLang,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeLangSecond: (currentLang) => {
    dispatch(onChangeLang(currentLang));
  },
});

const SelectLang = connect(mapStateToProps, mapDispatchToProps)(SelectLangRedux);

export { SelectLang };