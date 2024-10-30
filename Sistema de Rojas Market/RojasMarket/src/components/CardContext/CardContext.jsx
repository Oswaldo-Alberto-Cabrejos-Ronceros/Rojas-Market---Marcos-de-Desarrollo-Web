import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [productosCarrito, setProductosCarrito] = useState([]);

  const addToCart = (producto) => {
    setProductosCarrito((prevProductos) => {
      // Verifica si el producto ya existe en el carrito
      const existingProduct = prevProductos.find((p) => p.idProducto === producto.idProducto);
      if (existingProduct) {
        // Si existe, muestra un alert y actualiza la cantidad
        alert(`El producto ${producto.nombre} ya está en el carrito. Se actualizará la cantidad.`);
        return prevProductos.map((p) =>
          p.idProducto === producto.idProducto
            ? { ...p, quantity: p.quantity + producto.quantity } // Suma la cantidad
            : p
        );
      }
      // Si no existe, agrega el producto al carrito
      return [...prevProductos, { ...producto, quantity: producto.quantity }];
    });
  };

  const updateProductQuantity = (productId, quantity) => {
    setProductosCarrito((prevProductos) =>
      prevProductos.map((product) =>
        product.idProducto === productId ? { ...product, quantity } : product
      )
    );
  };

  const removeFromCart = (productId) => {
    setProductosCarrito((prevProductos) =>
      prevProductos.filter((product) => product.idProducto !== productId)
    );
  };

  return (
    <CartContext.Provider value={{ productosCarrito, addToCart, updateProductQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};