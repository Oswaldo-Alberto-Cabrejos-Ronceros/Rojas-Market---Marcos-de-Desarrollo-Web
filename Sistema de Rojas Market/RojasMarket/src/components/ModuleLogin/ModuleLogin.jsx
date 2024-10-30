import React from 'react'
import { Link } from 'react-router-dom'
import './ModuleLogin.css'
import { MdAlternateEmail } from "react-icons/md";

function ModuleLogin() {
  return (
    <div className='ModuleLoginContainer'>
        <div className="Content-1">
        <h2>Login</h2>
        <p className="PMd">Ingrese sus datos</p>
        <div className="input-user-container">
          <input type="text" placeholder="Ingrese correo" />
          <svg
          width="61"
          height="61"
          viewBox="0 0 61 61"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="at-sign_svgrepo.com">
            <path
              id="Vector"
              d="M43.5296 48.8291C39.7686 51.6546 35.0936 53.3291 30.0273 53.3291C17.6009 53.3291 7.52734 43.2556 7.52734 30.8291C7.52734 18.4027 17.6009 8.3291 30.0273 8.3291C42.4538 8.3291 52.5273 18.4027 52.5273 30.8291V34.5791C52.5273 38.0309 49.7291 40.8291 46.2773 40.8291C42.8256 40.8291 40.0273 38.0309 40.0273 34.5791V20.8291M40.0273 30.8291C40.0273 36.3519 35.5501 40.8291 30.0273 40.8291C24.5045 40.8291 20.0273 36.3519 20.0273 30.8291C20.0273 25.3063 24.5045 20.8291 30.0273 20.8291C35.5501 20.8291 40.0273 25.3063 40.0273 30.8291Z"
              stroke="#9CA3AF"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
        </div>
        <div className="input-user-container">
          <input type="text" placeholder="Ingrese contraseña" />
          <svg
            width="25"
            height="26"
            viewBox="0 0 25 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Vector"
              d="M14.5091 22.1C13.8198 22.2559 13.1197 22.334 12.4182 22.3333C7.42454 22.3333 3.19812 18.4093 1.77631 13C2.1591 11.5441 2.74871 10.178 3.51929 8.96133M10.0518 10.172C10.6793 9.42179 11.5303 9.00033 12.4176 9.00033C13.305 9.00033 14.156 9.42179 14.7834 10.172C15.4109 10.9222 15.7634 11.9397 15.7634 13.0007C15.7634 14.0616 15.4109 15.0791 14.7834 15.8293M10.0518 10.172L14.7834 15.8293M10.0518 10.172L14.7823 15.8267M14.7834 15.8293L18.4534 20.216M10.0541 10.1733L6.38522 5.78667M6.38522 5.78667L2.38183 1M6.38522 5.78667C8.18324 4.39942 10.2783 3.66321 12.4182 3.66667C17.4118 3.66667 21.6382 7.59067 23.0601 13C22.275 15.9739 20.6451 18.5261 18.4523 20.2147M6.38522 5.78667L18.4523 20.2147M18.4523 20.2147L22.4545 25"
              stroke="#9CA3AF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <a href="#">Olvidaste tu contraseña</a>
        <div className="btnContainer">
          <button>Iniciar Sesion</button>
        </div>
        <Link to="/registrarse">Registrate</Link>
      </div>
    </div>
  )
}

export default ModuleLogin