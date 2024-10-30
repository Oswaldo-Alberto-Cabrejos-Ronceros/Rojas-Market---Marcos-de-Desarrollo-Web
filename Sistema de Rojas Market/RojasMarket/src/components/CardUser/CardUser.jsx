import React from 'react'
import './CardUser.css'

function CardUser({nombre}) {
  return (
    <div className='NavUserContainer'> 
        <p className='PMd'>{nombre}</p>
        <img className='ImgUser' src="https://dashboard.rtta.rw/public/assets/img/avatar.png" alt="Imagen de Usuario" />
    </div>
  )
}

export default CardUser