import React, { useState, useEffect } from "react";
import './Carrucel.css'

const Carrusel = ({ imagenes }) => {
  let  autoPlay = true;
  let interval = 3000 ;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (autoPlay) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === imagenes.length - 1 ? 0 : prevIndex + 1
        );
      }, interval);
      return () => clearInterval(timer); // Limpia el intervalo al desmontar el componente
    }
  }, [currentIndex, imagenes.length, autoPlay, interval]);

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? imagenes.length - 1 : currentIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === imagenes.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <div className="carrusel">
      <div className="carrusel-contenedor">
        <button onClick={goToPrevious} className="carrusel-boton">
          {"<"}
        </button>
        <div className="img-container">
        <img
          src={imagenes[currentIndex]}
          alt={`Imagen ${currentIndex}`}
          className="carrusel-imagen"
        />
        </div>
        <button onClick={goToNext} className="carrusel-boton">
          {">"}
        </button>
      </div>
      <div className="carrusel-indicadores">
        {imagenes.map((_, index) => (
          <span
            key={index}
            className={`carrusel-indicador ${
              index === currentIndex ? "activo" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carrusel;