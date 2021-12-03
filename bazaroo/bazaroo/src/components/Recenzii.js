import { useState } from 'react';

import './Recenzii.css';
import avatar from '../assets/avatar.png'

import left from '../assets/left.png'
import right from '../assets/right.png'

function Recenzii() {
  const [recenzii, setRecenzii] = useState([
    {
      nume: 'Andrei',
      content: 'Mi-am luat în sfârșit restanța! '
    },
    {
      nume: 'Dan',
      content: 'Predare excelentă!'
    },
    {
      nume: 'Daria',
      content: 'Dacă nu ar fi fost Bazaroo n-aș fi reușit în viață!'
    }
  ])

  const next = () => {
    const primul = recenzii[0]
    const newRecenzii = recenzii
    newRecenzii.shift()
    newRecenzii.push(primul)
    setRecenzii(newRecenzii)
  }

  return (
    <div className='recenzii_container'>
     
      <h1>Ce zic utilizatorii?</h1>
      <div className='recenzii_slider'>

        <button className='left'>
          <img src={ left }/>
        </button>

        {
          recenzii.map((recenzie, index) => index<=1 && <div className="recenzie_container">
              <div className="recenzie_titlu">
                <img src={avatar} alt="avatar" />
                <h1> {recenzie.nume} </h1>
              </div>
              <p> {recenzie.content} </p>
            </div>
          )
        }

        <button className='right' onClick={ next }>
          <img src={ right }/>
        </button>

      </div>
    </div>
      
  );
}

export default Recenzii;

