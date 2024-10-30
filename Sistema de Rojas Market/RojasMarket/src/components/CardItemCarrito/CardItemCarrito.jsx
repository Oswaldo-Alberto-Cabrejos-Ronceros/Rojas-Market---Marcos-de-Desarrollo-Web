import React, { useState, useContext } from "react";
import "./CardItemCarrito.css";
import { CartContext } from '../CardContext/CardContext';
import { Button } from "../Button/Button";

function CardItemCarrito({ producto }) {
  const [quantity, setQuantity] = useState(producto.quantity);
  const { updateProductQuantity, removeFromCart } = useContext(CartContext);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
    updateProductQuantity(producto.idProducto, newQuantity);
  };

  const handleRemove = () => {
    removeFromCart(producto.idProducto);
  };

  return (
    <div className="CardItemCarritoContainer">
      <div className="CardItemCarritoLeftContainer">
        <img src={producto.rutaImagen} alt={producto.nombre} />
      </div>
      <div className="CardItemCarritoCenterContainer">
        <p className="PMd">{producto.nombre}</p>
        <p className="PSm">{producto.nombre}</p>
      </div>
      <div className="CardItemCarritoRightContainer">
        <p className="PMd">{"S/" + producto.precioVenta}</p>
        <input
          type="number"
          id="cantidad"
          name="cantidad"
          value={quantity}
          onChange={handleQuantityChange}
          step={1}
          min={1}
          max={10}
        />
      | <Button nombre={"Eliminar"} onClick={handleRemove}/>
      </div>
    </div>
  );
}

export default CardItemCarrito;
