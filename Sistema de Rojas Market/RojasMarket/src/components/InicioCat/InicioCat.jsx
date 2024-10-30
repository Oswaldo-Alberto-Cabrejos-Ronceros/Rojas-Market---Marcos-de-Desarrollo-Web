import React, { useState } from 'react';
import './InicioCat.css';

export const InicioCat = ({categoria}) => {
  const [selectedOption, setSelectedOption] = useState("");

  // Función para manejar el cambio de selección
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <div className="inicioCat">
        <h3>Productos de la categoría {categoria.nombre}</h3>
        <div className='ordenarPor'>
        <label htmlFor="miSelect">Ordenar Por:</label>
        <select 
        id="miSelect"
        value={selectedOption}
        onChange={handleSelectChange}>
          <option value="" disabled selected>
            Destacados
          </option>
          <option value="opcion1">Opción 1</option>
          <option value="opcion2">Opción 2</option>
          <option value="opcion3">Opción 3</option>
        </select>
        </div>
      </div>
    </>
  );
};
