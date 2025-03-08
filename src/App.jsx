import { useState } from 'react'
import React from 'react';
import Card from './components/Card/Card';
import './components/Card/Card.css';
import './App.css'

function App() {
  const [open, setOpen] = useState(false);

  const openCard = () => {
    setOpen(true);
  }

  return (
    <>
        <div className='Card'>


          <button className={ `${open ? 'hidden' : 'show'}`}  onClick={openCard}>
            <p>Click on Me</p>
          </button>
          {open&& <Card/>}


        </div>
    </>
  )
}

export default App
