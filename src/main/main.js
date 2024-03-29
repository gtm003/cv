import React from 'react';
import { connect } from 'react-redux';
import { Contacts } from '../components/contacts/contacts';
import { Foto } from '../components/foto/foto';
import { SelectLang } from '../components/select/selectLang';
import { COURSES, DESCRIPTION, NAME, POSITION, PROJECTS, SKILLS } from '../data/constants';
//import {Link} from "react-router-dom";
//import './main.scss';
//import '../assets/test.txt'

const CVRedux = ({currentLang}) => {
  //const currentLang = 'GB';
  console.log(currentLang);
  const subsectionClasses = currentLang === 'IL'? 'subsections hebrew' : 'subsections';
  return (
    <main className='main'>
      <div className='section-left'>
        <Foto />
        <div className='name'>{NAME[currentLang]}</div>
        <div className='position'>{POSITION[currentLang]}</div>
        <Contacts />
        <div className='subsection'>
          <div className='title'>
            <h5>SKILLS</h5>
          </div>
          {
              SKILLS.map((item, index) => <div key={index} className='item'>
                <div className='subtitle'>
                  {item.subtitle}
                </div>
                <Value value={item.value} max={5}/>

              </div>)
            }
        </div>
        <div className='subsection'>
          <div className='title'>
            <h5>Languages</h5>
          </div>
          <div className='item'>
            <div className='subtitle'>
              <div>English</div>
            </div>
            <Value value={2} max={5}/>
          </div>
        </div>
      </div>
      <div className='section-right'>
        <SelectLang/>
        <p className = 'title'>{NAME[currentLang]}</p>
        <p className = 'subtitle'>{POSITION[currentLang]}</p>
        <div className = {`${subsectionClasses}`}>
          <div className = 'subsections-title'>{DESCRIPTION[currentLang].title}</div>
          <div className = 'subsections-content'>{DESCRIPTION[currentLang].text}</div>
        </div>
        <div className = {`${subsectionClasses}`}> 
          <div className = 'subsections-title'>{COURSES.title[currentLang]}</div>
          <div className = 'subsections-content'>
            {
              COURSES.list.map((item) => (
                <p key = {item.title}><a href = {item.courseLink}>{item.title}</a>{item.courseDescripe[currentLang]}</p>
              ))
            }
          </div>
        </div>
        <div className = {`${subsectionClasses}`}>  
          <div className = 'subsections-title'>{PROJECTS.title[currentLang]}</div>
          <div className = 'subsections-content'>
            {
              PROJECTS.progects.map((item) => (
                <p className='marginBottom' key = {item.title.GB}>
                  <a href = {item.GHLink}>{item.title[currentLang]}</a>
                  {item.description[currentLang]}
                </p>
              ))
            }
          </div>
        </div>
        <div className = {`${subsectionClasses}`}>
          <div className = 'subsections-title'>{COURSES.certificatesTitle[currentLang]}</div>
          <div className = 'subsections-content'>
            {
              COURSES.list.map((item) => (
                <p key = {item.title}><a href = {item.certificateLink}>{item.title}</a></p>
              ))
            }
          </div>
        </div>
      </div>
    </main>
  )
}

function Value ({value, max}) {
  const arr = new Array(5).fill(null);
  return (
    <div className='value'>
      {
        arr.map((item, index) => {
          function color(value) {
            return index < value ? '#33ccaa' : '#454a55';
          }
          const circleStyle = {
            background: color(value)
          }
        return <div className='circle' style={circleStyle} key={index}></div>
      })
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  currentLang: state.currentLang,
});

const CV = connect(mapStateToProps)(CVRedux);

export { CV };