import React from 'react';
//import {Link} from "react-router-dom";
//import './main.scss';
//import '../assets/test.txt'

const SKILLS = [
  {
    subtitle: 'Java-script',
    value: '4',
  },
  {
    subtitle: 'Types-cript',
    value: '2',
  },
  {
    subtitle: 'SCSS',
    value: '4',
  },
  {
    subtitle: 'HTML',
    value: '4',
  },
  {
    subtitle: 'React',
    value: '3',
  }
]

export default function CV() {
  return (
    <main className='main'>
      <div className='section-left'>
        <i className="material-icons icon-close">close</i>
        <i className="material-icons icon-menu">menu</i>
        <img className='foto' src="https://i.postimg.cc/7P7GbsL3/image.jpg" alt="foto"/>
        <div className='title'>Grigorovich Tatyana</div>
        <div className='subtitle'>Junior Frontend Developer</div>
        <div className='contacts'>
          <div className='contact'>
            <i className="material-icons icon">mail</i>
            <span>gtm003@gmail.com</span>
          </div>
          <div className='contact'>
            <i className="material-icons icon">phone</i>
            <span>+7 963 318-00-31</span>
          </div>
          <div className='contact'>
            <i className="material-icons icon">place</i>
            <span>Saint Petersburg, Russia</span>
          </div>
        </div>
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
        <header>
          <a href="/assets/tips.png" download="text">Download</a>
          <div class="input-field col s12">
            <select>
              <option value="" disabled selected>Choose your option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
          <label>Materialize Select</label>
          </div>
        </header>
        <h3>Grigorovich Tatyana</h3>
        <h4>Junior Frontend Developer</h4>
        <div className = 'subsections'>
          <div className = 'subsections-title'>Description</div>
          <div className = 'subsections-content'>I am looking for a Junior Frontend Developer position with opportunities for professional growth. My previous professional activity
            was related to the design of different metal structures. I believe that my previous experience combined with persistence in achieving my goals will
            help me to acquire all necessary skills in a short period of time.
          </div>
          <div className = 'subsections-title'>Courses</div>
          <div className = 'subsections-content'>
            <p>Rolling Scope School. <a href="/assets/tips.png">Javascript/Front-end</a> and <a href="/assets/tips.png">React.</a></p>
            <p>On the Javascript / Front-end course, I learned HTML, JS and SCSS, learned how to work with the Gulp and WebPack compilers, and gained experience with GitHub.</p>
            <p>On the React course, I gained experience in creating UI using the specified library and initial experience in programming in TypeScript</p>
          </div>
          <div className = 'subsections-title'>Projects</div>
          <div className = 'subsections-content'>
            <p className='marginBottom'>
              <a href="/assets/tips.png">SVG-editor. </a>
              This is teamwork, the final task of the Javascript / Front-end course. The project uses the MVC pattern. The bulk of my work on this project is the model methods responsible for creating and editing elements on the canvas.</p>
            <p className='marginBottom'>
              <a href="/assets/tips.png">Einstein's puzzle. </a>
              This is an individual project, the first assignment from the React course. In this project, a rather complex game logic has been implemented and basic knowledge of the React library has been obtained.</p>
            <p>
              <a href="/assets/tips.png">React. RS Lang. </a>
              This is the final team project, in which I learned to write in TypeScript, got experience with Redux, React Route. My part in this project is the Sprint and Word Constructor games, statistics page.</p>
          </div>
          <div className = 'subsections-title'>Certificates</div>
          <div className = 'subsections-content'>
            <p>RS School. Javascript/Front-end</p>
            <p>RS School. React</p>
          </div>
        </div>
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