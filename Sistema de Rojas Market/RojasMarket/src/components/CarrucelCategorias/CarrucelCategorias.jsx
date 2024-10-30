import React from 'react'
import './CarrucelCategorias.css'
import { useState } from 'react';
import CardCategoriaComponent from '../CardCategoriaComponent/CardCategoriaComponent';
import { Link } from 'react-router-dom';

function CarrucelCategorias({categorias}) {
    console.log(categorias);
    const [index, setIndex] = useState(0); // Estado para controlar el desplazamiento

    // Función para avanzar el carrusel
    const handleNext = () => {
      if (index < categorias.length - 5) {
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
    <div className='CarrucelCategoriasContainer'> 
            <button onClick={handlePrev} disabled={index === 0} className="prev-button">←</button>
        <div className="CarrucelCategoriasComponentContent">
        {categorias.slice(index, index + 5).map((categoria, i) => (
          <CardCategoriaComponent key={categoria.id} categoria={categoria} />
        ))}
      </div>
      <button onClick={handleNext} disabled={index >= categorias.length - 5} className="next-button">→</button>
    </div>
  )
}

export default CarrucelCategorias