import React from "react";
import "./CardInfoCarrito.css";
import BotonPrimary from '../BotonPrimary/BotonPrimary'

function CardInfoCarrito({ productos }) {
  return (
    <div className="CardInfoCarritoContainer">
      <p className="PLg">Productos</p>
      {
        productos.length === 0 ?(
          <h3>Carrito Vacio</h3>
        ):(
          <ul>
          {productos.map((producto, index) => {
            return (
              <li key={index}>
                <p className="PMd">{producto.nombre}</p>
                <p className="PMd">{"S/" + producto.precioVenta * producto.quantity}</p>
              </li>
            );
          })}
        </ul>
        )
      }
      <div className="CardInfoCarritoButtonContainer">
      <BotonPrimary nombre={"Continuar compra"}/>
      </div>
    </div>
  );
}

export default CardInfoCarrito;
