import React from "react";
import axios from 'axios';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from "../component-product/productCard";
import { InicioCat } from "../InicioCat/InicioCat";
import { SideBar } from "../SideBar/SideBar";
import "./Categoria.css";
//import { useLocation } from "react-router-dom";

export const Categoria = () => {

  //const location= useLocation();
  //const {categoria}=location.state;
  //console.log(categoria);

  const {categoriaId} = useParams();
    const[productos, setProductos]= useState([]);
    
    const [categoria, setCategorias] = useState([]);
    useEffect(()=>{
      cargarCategoria();
    },[categoriaId])

    const cargarCategoria = async () =>{
      const urlCat = "http://localhost:8080/categorias/"+categoriaId+"";
      const categs = await axios.get(urlCat);
      setCategorias(categs.data);
  }

  useEffect(()=>{
    const cargarProductos = async()=>{
        const url = `http://localhost:8080/${categoriaId}/productos`;
        const respuesta = await axios.get(url);
        console.log(respuesta);
        setProductos(respuesta.data);
    };
    cargarProductos();
},[categoriaId]);

  /*const cervezaCuzqueña = {
    image:
      "https://vivanda.vtexassets.com/arquivos/ids/449302/20210052.jpg?v=638241408433200000", // URL de imagen de ejemplo
    name: "Cerveza Cusqueña",
    brand: "Cusqueña",
    price: 32,
    originalPrice: 45,
  };*/

  return (
    <>
      <div className="body-category">
        <InicioCat categoria={categoria}/>
        <div className="categoria-container">
          <div className="sidebar-category">
            <SideBar />
          </div>
          <div className="productos-container">
          {productos.map((product, indice) => (
              <ProductCard  key={indice} product={product} />
           ))}
            
          </div>
        </div>
      </div>
    </>
  );
};
