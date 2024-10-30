import React, { useState } from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <div className="productos">
      <div className="product-card">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-details">
          <h3 className="product-brand">{product.brand}</h3>
          <h2 className="product-title">
            <strong>{product.name}</strong>
          </h2>
          <div className="price">
            <strong>S/ {product.price}</strong>
          </div>
          {product.originalPrice && (
            <div className="price-original">
              <span className="price-strike">S/ {product.originalPrice}</span>
            </div>
          )}
          <div className="quantity">
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
            />
          </div>
          <button className="add-to-cart">Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
