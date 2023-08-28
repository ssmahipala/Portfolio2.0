import React from 'react'

import Navigation from './Navigation';

import myself from '../assets/myself.png'

function About() {
  return (
    <div id='about' className='about-section container'>
        <div className='about-div-1'>
        <h2>
            I'm Sai Sumanth Mahipala. You can call me Sumanth! I am a Frontend Developer skilled in developing ReactJS applications
        </h2>
        </div>
        <div className="about-div-2">
            <img src={myself} alt="Image of Sumanth" width={300} height={400}/>
        </div>
    </div>
  )
}

export default About;
