import React from 'react'
import './BotonPrimary.css'
import { Link } from 'react-router-dom'

function BotonPrimary({nombre}) {
  return (
    <div className='BotonPrimaryContainer'>
        <button>
          <Link className='link-seguir-comp' to={"/home"}>
           <span>{nombre}</span>
           </Link>
        </button>
    </div>
  )
}

export default BotonPrimary