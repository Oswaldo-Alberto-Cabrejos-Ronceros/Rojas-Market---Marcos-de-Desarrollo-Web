import React from 'react'
import './CarrucelProductosComponent.css'
import { useState } from 'react';
import CardProducto from '../component-product/productCard'


function CarrucelProductosComponent({productos}) {
    const [index, setIndex] = useState(0); // Estado para controlar el desplazamiento

    // Función para avanzar el carrusel
    const handleNext = () => {
      if (index < productos.length - 5) {
        setIndex(index + 1);
      }
    };
  
    // Función para retroceder el carrusel
    const handlePrev = () => {
      if (index > 0) {
        setIndex(index - 1);
      }
    };
  return (
    <div className='CarrucelProductosComponentContainer'>
        <button onClick={handlePrev} disabled={index === 0} className="prev-button">←</button>
        <div className="CarrucelProductosComponentContent">
        {productos.slice(index, index + 5).map((product, i) => (
          <CardProducto key={product.idProducto} product={product} />
        ))}
      </div>
      <button onClick={handleNext} disabled={index >= productos.length - 5} className="next-button">→</button>
    </div>
  )
}

export default CarrucelProductosComponent