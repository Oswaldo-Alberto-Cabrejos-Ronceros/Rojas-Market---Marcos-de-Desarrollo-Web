import React, { useState } from "react";
import "./SideBar.css";

export const SideBar = () => {
  const [precio, setPrecio] = useState(50);
  const [precioAbierto, setPrecioAbierto] = useState(false);
  const [filtroAbierto, setFiltroAbierto] = useState(false);

  const togglePrecio = () => setPrecioAbierto(!precioAbierto);
  const toggleFiltro = () => setFiltroAbierto(!filtroAbierto);

  const handlePrecioChange = (event) => setPrecio(event.target.value);

  // Función para aplicar el filtro y cerrar el sidebar responsive
  const handleAplicarFiltro = () => {
    // Aquí puedes agregar la lógica de aplicar filtros si tienes alguna
    // Luego cerrar el sidebar mobile
    setFiltroAbierto(false);
  };

  return (
    <>
      {/* Barra lateral para pantallas grandes */}
      <div className="sidebar">
        <button className="filtro" onClick={toggleFiltro}>
          Filtrar
        </button>
        <div className="filters-container">
          <label htmlFor="filtro-marca">Marca:</label>
          <select id="filtro-marca" defaultValue="">
            <option value="" disabled>
              Selecciona Marca
            </option>
            <option value="opcion1">Opción 1</option>
            <option value="opcion2">Opción 2</option>
            <option value="opcion3">Opción 3</option>
          </select>

          <label htmlFor="filtro-precio">Precio:</label>
          <select id="filtro-precio" defaultValue="">
            <option value="" disabled>
              Selecciona Precio
            </option>
            <option value="opcion1">Opción 1</option>
            <option value="opcion2">Opción 2</option>
            <option value="opcion3">Opción 3</option>
          </select>
        </div>
      </div>

      {/* Barra lateral para pantallas pequeñas (móvil) */}
      {filtroAbierto && (
        <div className="sidebar-responsive">
          <div className="filtro-box">
            <h2>Filtrar por:</h2>
          </div>

          {/* Filtro de Precio */}
          <div className={`filter-option ${precioAbierto ? "open" : ""}`}>
            <h3 onClick={togglePrecio}>
              Precio <span>{precioAbierto ? "-" : "+"}</span>
            </h3>
            {precioAbierto && (
              <ul>
                <li>
                  <div className="range-container">
                    <div className="precio-container">
                      <label htmlFor="precio1" className="precio-label">
                        <span id="precio-value">{precio}</span>
                      </label>
                    </div>
                    <input
                      type="range"
                      name="precio"
                      id="precio1"
                      min="0"
                      max="100"
                      value={precio}
                      onChange={handlePrecioChange}
                    />
                  </div>
                </li>
              </ul>
            )}
          </div>

          {/* Botones de Filtro */}
          <div className="filter-buttons">
            <button className="clear-button">Limpiar Filtro</button>
            <button onClick={handleAplicarFiltro}>Aplicar</button>
          </div>
        </div>
      )}
    </>
  );
};
