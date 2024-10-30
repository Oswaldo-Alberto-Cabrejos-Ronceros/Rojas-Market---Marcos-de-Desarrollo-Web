import React, { useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
//import products from '../../data/products.json';
import { CartContext } from "../CardContext/CardContext";
import ProductCard from './productCard'
import './productDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const urlBase ="http://localhost:8080/productos";
  const [producto, setProducto] = useState([]);
  const[productoss, setProductoss]= useState([]);
  const[idcat, setIdcat] = useState([]);
  


  useEffect(()=>{
      const cargarProducto= async()=>{
      const resultado = await axios.get(`${urlBase}/${id}`);
      setProducto(resultado.data);
      setIdcat(resultado.data.categoria.idCategoria)
      console.log(resultado.data.categoria.idCategoria);
    };
      cargarProducto();
      
      
      if (!producto) {
        navigate('/');
      }
    },[id, navigate])

    

    useEffect(()=>{
      const cargarProductos = async()=>{
         
          const url = `http://localhost:8080/${idcat}/productos`;
          const respuesta = await axios.get(url);
          console.log(respuesta);
          setProductoss(respuesta.data);
      };
      cargarProductos();
  },[idcat]);
    
  const [quantity, setQuantity] = useState(1);
  
  

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => quantity > 1 && setQuantity((prev) => prev - 1);

  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    const productWithQuantity = { ...producto, quantity };
    addToCart(productWithQuantity);
    alert(
      `Producto "${producto.nombre}" agregado al carrito con cantidad: ${quantity}`
    );
  };
  

  return (
    <div>
      <div className="product-detail">
        <div className="product-image">
          <img src={producto.rutaImagen} alt={producto.nombre} />
        </div>
        <div className="product-info">
          {/* Añadir la referencia al nombre del producto */}
          <h3>{producto.nombre}</h3>
          <h1 >{producto.nombre}</h1>
          <p className="description"><strong>Descripción:</strong> {producto.descripcion}</p>
          <p><strong>Precio:</strong> S/ {producto.precioVenta}</p>
          <div className="quantity">
            <button onClick={decreaseQuantity}>-</button>
            <span>{quantity}</span>
            
            <button onClick={increaseQuantity}>+</button>
          </div>
          <button className="add-to-cart"  onClick={handleAddToCart}>AGREGAR</button>
        </div>
      </div>

      {/* Sección de productos similares */}
      <div className="similar-products-section">
        <h2>Productos Similares</h2>
        <div className="similar-products">
          {productoss.map((productosss) => (
            <ProductCard key={productosss.id} product={productosss} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
