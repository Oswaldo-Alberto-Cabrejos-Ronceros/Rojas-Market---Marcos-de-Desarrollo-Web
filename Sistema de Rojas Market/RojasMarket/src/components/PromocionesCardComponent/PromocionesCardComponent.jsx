import React from 'react'
import './PromocionesCardComponent.css'
import ProductCard from '../component-product/productCard'
import CarrucelProductosComponent from '../CarrucelProductosComponent/CarrucelProductosComponent'

function PromocionesCardComponent({productos}) {

  console.log(productos)
  return (
    <div className='PromocionesCardComponentContainer'>
        <div className='PromocionesCardComponentTitleContainer'>
            <h3>Promociones</h3>
        </div>
        <div className='PromocionesCardComponentContent'>
        <CarrucelProductosComponent productos={productos}/>
        </div>
    </div>
  )
}

export default PromocionesCardComponent