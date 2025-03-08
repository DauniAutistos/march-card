import React from 'react'
import godoGif from '../img/godo.gif';
const Card = () => {
  



  return (
    <div className="card card-appear ">
      <div className="outside">
        <div className="front">
        </div>
        <div className="back">
          <p className='textus '>Кто прочитал тот гей</p>
          <p className='textus '>Не плачь, так уж и быть сегодня посуду не будешь мыть</p>
        </div>
      </div>
      <div className="inside">
        <div className="img-block">
          <img src={godoGif}  alt="dancing" />
        </div>
      </div>
    </div>
  )
}

export default Card;
