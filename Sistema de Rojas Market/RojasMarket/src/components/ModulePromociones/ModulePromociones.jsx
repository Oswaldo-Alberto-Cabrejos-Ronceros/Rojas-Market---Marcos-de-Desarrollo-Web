import React from 'react'
import './ModulePromociones.css'
import ProductCard from '../component-product/productCard'
import Promociones from '../../data/promociones.json'

function ModelePromociones() {

  


  return (
    <div className='ModelePromocionesContainer'>
      <h2>¡Promociones ultimas unidades!</h2>
      <h2>¡50% de descuento en los siguientes articulos!</h2>
      <div className="listaproductos">
        {Promociones.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
    
  )
}

export default ModelePromociones