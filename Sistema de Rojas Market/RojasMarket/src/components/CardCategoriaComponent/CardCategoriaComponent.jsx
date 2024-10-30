import React from "react";
import "./CardCategoriaComponent.css";
import { Link } from "react-router-dom";

function CardCategoriaComponent({categoria}) {

  return (
    <div className="CardCategoriaComponentContainer">
      <a href={`/productos/categoria/${categoria.id}`}>
        <div className="CardCategoriaComponentSubContent">
        <img src={categoria.image} alt={categoria.name} />
      </div>
      <div className="CardCategoriaComponentInfContent">
        <p className="PMd">{categoria.name}</p>
      </div>
      </a>
      
    </div>
  );
}

export default CardCategoriaComponent;
