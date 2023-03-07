import React, { useState } from 'react'
import './works.scss'

export default function Works() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: '1',
      icon: 'assets/eminem.jpeg',
      title: 'Eminem',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
       'modi tempora incidunt ut labore et dolore magnam aliquam quaerat',
      img: 'assets/mobile.png'
    },
    {
      id: '2',
      icon: 'assets/dre.jpeg',
      title: 'Dre',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
       'modi tempora incidunt ut labore et dolore magnam aliquam quaerat',
      img: 'assets/mobile.png'
    },
    {
      id: '3',
      icon: 'assets/eminem.jpeg',
      title: 'Dre',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
       'modi tempora incidunt ut labore et dolore magnam aliquam quaerat',
      img: 'assets/mobile.png'
    },
    {
      id: '4',
      icon: 'assets/dre.jpeg',
      title: 'Eminem',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
       'modi tempora incidunt ut labore et dolore magnam aliquam quaerat',
      img: 'assets/mobile.png'
    },
  ]

  const handleClick = (rotation) =>{
    const lastIndex = data.length - 1
    rotation === 'left' 
    ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : lastIndex)
    : setCurrentSlide(currentSlide < lastIndex ? currentSlide + 1 : 0 )
  }

  return (
    <div className='works' id='works'>
      <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        {data.map((d) =>(
        <div key={d.id} className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={d.icon}></img>
                </div>
                <h2>{d.title}</h2>
                <p>{d.des}</p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src={d.icon}></img>
            </div>
          </div>
        </div>
        ))}
      </div>
      <img src='assets/arrow.png' className='arrow left' onClick={() => handleClick('left')}></img>
      <img src='assets/arrow.png' className='arrow right' onClick={() => handleClick('')}></img>
    </div>
  )
}
