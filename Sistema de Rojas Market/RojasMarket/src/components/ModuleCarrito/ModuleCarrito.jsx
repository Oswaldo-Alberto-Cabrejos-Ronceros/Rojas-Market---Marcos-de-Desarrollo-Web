import React, { useContext } from 'react'
import './ModuleCarrito.css'
import { CartContext } from '../CardContext/CardContext'
import CardItemCarrito from '../CardItemCarrito/CardItemCarrito'
import CardInfoCarrito from '../CardInfoCarrito/CardInfoCarrito'

function ModuleCarrito() {
  const {productosCarrito} = useContext(CartContext);
  console.log(productosCarrito)
  return (
    <div className='ModuleCarritoContainer'>
        <div className='ModuleCarritoTitleContainer'>
        <h3>Mi Carrito</h3>
        </div>
        <div className='ModuleCarritoCardContent'>
          {
            productosCarrito.length === 0 ? (
              <div className='CarritoEmpty'>
                <h3>Carrito vacio</h3>
              </div>
            ):(
              <div className='ModuleCarritoCardContainer'>
              {
                productosCarrito.map((producto)=>(
                  <CardItemCarrito key={producto.idProducto} producto={producto}/>
                ))
              }
              </div>
            )
          }
        <div className='ModuleCarritoInfoContainer'>
        <CardInfoCarrito productos={productosCarrito}/>
        </div>
        </div>
    </div>
  )
}

export default ModuleCarrito