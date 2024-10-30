import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CardContext/CardContext';
import './productCard.css';

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => quantity > 1 && setQuantity((prev) => prev - 1);

  const handleAddToCart = () => {
    const productWithQuantity = { ...product, quantity };
    addToCart(productWithQuantity);
    alert(`Producto "${product.nombre}" agregado al carrito con cantidad: ${quantity}`);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.rutaImagen} alt={product.nombre} />
      </div>
      <div className="product-details">
        <h3 className="product-brand">{product.nombre}</h3>
        <h2 className="product-title"><strong>{product.nombre}</strong></h2>
        <div className="price"><strong>S/ {product.precioVenta}</strong></div>
        <div className="quantity">
          <button className="quantity-btn" onClick={decreaseQuantity}>-</button>
          <span className="quantity-value">{quantity}</span>
          <button className="quantity-btn" onClick={increaseQuantity}>+</button>
        </div>
        <button className="add-to-cart" onClick={handleAddToCart}>Agregar</button>
        <br /><br />
        {/* Enlace a la página de detalle */}
        <Link to={`/product/${product.idProducto}`} className="view-detail">Ver Descripción</Link><br/><br/>
      </div>
    </div>
  );
};

export default ProductCard;
