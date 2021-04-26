import React from 'react';
//import {Link} from "react-router-dom";
import './main.scss';
//import '../assets/test.txt'

const SKILLS = [
  {
    subtitle: 'Javascript',
    value: '3',
  },
  {
    subtitle: 'SCSS',
    value: '3',
  },
  {
    subtitle: 'HTML',
    value: '4',
  },
  {
    subtitle: 'React',
    value: '1',
  }
]

export default function CV() {
  return (
    <main className='main'>
      <div className='section-left'>
        <img className='foto' src="https://i.postimg.cc/7P7GbsL3/image.jpg" alt="foto"/>
        <h2>Grigorovich Tatyana</h2>
        <h3>Junior Frontend Developer</h3>
        <div className='contacts'>
          <span>gtm003@gmail.com</span>
          <span>+7 963 318-00-31</span>
          <span>Saint Petersburg, Russia</span>
        </div>
        <div className='subsection'>
          <div className='title'>
            <h3>SKILLS</h3>
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
            <h3>Languages</h3>
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
      <header>

      <a href="/assets/tips.png" download="text">Download</a>
        <h2>Grigorovich Tatyana</h2>
        <h3>Junior Frontend Developer</h3>
        
    </header>


      </div>




</main>
  )
}
//      <Link to="/assets/tips.png" target="_blank" download>Download1</Link>
function Value ({value, max}) {
  const arr = new Array(5).fill(null);
  console.log(value);
  return (
    <div className='value'>
      {
        arr.map((item, index) => {
          function color(value) {
            return index < value ? '#24efc2' : '#454a55';
          }
          console.log(`index: ${index} - value: ${value}`)
          console.log(color(value))
          const circleStyle = {
            background: color(value)
          }
        return <div className='circle' style={circleStyle} key={index}></div>
      })
      }
    </div>
  )
}

/*    <article>
        <table >
<tr>
    <td><h4>Contacts</h4></td>
<td>
    <ul>
        <li>Tel: +7 963 318-00-31</li>
        <li>E-mail: gtm003@gmail.com</li>
    </ul>
</td>

</tr>

<tr>
<td><h4>Description</h4></td>

    <td><p>I am looking for a Junior Frontend Developer position with opportunities for professional growth. My previous professional activity was related to the design of different metal structures. I believe that my previous experience combined with persistence in achieving my goals will help me to acquire all necessary skills in a short period of time.</p></td>

</tr>

<tr>
<td><h4>Skills</h4></td>
<td>
    <ul>
        <li>JS Basic</li>
        <li>HTML Basic</li>
        <li>CSS Basic</li>
        <li>C# Basic</li>
        <li>Git Hub</li>
    </ul>
</td>

<tr>
  <td><h4>Education</h4></td>
<td>
    <p>I am currently studying at the RS School on the JavaScript/Front-end course.</p>
</td>  
</tr>
  <tr>
  <td><h4>English proficiency</h4></td>
<td>
    <p>A2 – Intermediate. I can read technical documentation.</p>
</td>
</tr> </tr>
</table>
    </article>        */