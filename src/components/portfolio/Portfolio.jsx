import React, { useEffect, useState } from 'react'
import Portfoliolist from '../portfoliolist/Portfoliolist';
import './portfolio.scss';
import {concerts, featured, movies} from '../../data'

export default function Portfolio() {

  const [selected, setSelected] = useState('concerts');
  const [data, setData] =  useState([]);
  const listp = [
    {
      id: 'concerts',
      title: 'Concerts'
    },
    {
      id: 'featured',
      title: 'Featured'
    },
    {
      id: 'movies',
      title: 'Movies'
    }
  ];

  useEffect(() => {
    let newData = [];
    switch(selected){
      case 'concerts':
        setData(concerts);
        break;
      case 'featured':
        setData(featured);
        break;
      case 'movies':
        setData(movies);
        break;
      default:
        setData(concerts);
        break;
    }
  }, [selected]);

  return (
    <div className='portfolio' id='portfolio'>
      <ul>
        {listp.map(({id, title}) => (
          <Portfoliolist key={id} id={id} title={title} active={selected == id} setSelected={setSelected}/>
        ))}
      </ul>
      <div className='container'>
        {data.map((d) =>(
          <div key={d.id} className='item'>
            <img src={d.img} width={800}/>
            <p>{d.id}</p>
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
