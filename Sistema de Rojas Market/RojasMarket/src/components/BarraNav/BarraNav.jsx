import React from 'react'
import './BarraNav.css'
import CardUser from '../CardUser/CardUser'
import Logo from '../../assets/imgLogo/Logo.png'
import InputBusquedaBarNav from '../InputBusquedaBarNav/InputBusquedaBarNav'
import { FaShoppingCart } from "react-icons/fa";
import NavItem from '../NavItem/NavItem'
import { Link } from 'react-router-dom'

function BarraNav() {
  return (
    <div className='HorizontalContainer'>
      <Link className='divHome' to="/home">
      <img className='ImgLogo' src={Logo} alt="Logo" />
      </Link>
      <InputBusquedaBarNav/>
      <div className='NavsContainer'>
      <NavItem id={"Nosotros"} titulo={"Nosotros"} to="/nosotros"/>
      <NavItem id={"Productos"} titulo={"Productos"} to="/productos"/>
      </div>
      <Link className='divLogin' to="/login"> 
      <CardUser nombre={"Mi cuenta"}/>
      </Link > 
      <div className='shopIcon'>
      <Link to="/carrito">
      <FaShoppingCart size={24} />
      </Link>
      </div>
    </div>
  )
}

export default BarraNav