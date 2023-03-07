import { init } from 'ityped';
import React, { useEffect, useRef} from 'react'
import TypewriterComponent from 'typewriter-effect';
import './intro.scss';

export default function Intro() {

  const textRef = useRef();


  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className="imgContainer">
          <img src='assets/snoop.png'></img>
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2>Hollaa!! </h2>
          <h1>Snoop Dogg</h1>
          <h3>Artist  
            <span>
          <TypewriterComponent 
            options={{ 
            strings:["Hip-Hop", "West-Coast", "East-Coast"],
            autoStart:true,
            delay:75,
            loop:true
            }}
           /> 
            </span>
            </h3>
        </div>
        <a href='#portfolio'>
          <img src='assets/down.png' alt=''/>
        </a>
      </div>
    </div>
  )
}
