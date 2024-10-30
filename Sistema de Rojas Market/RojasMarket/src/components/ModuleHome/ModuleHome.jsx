import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import Carrusel from '../Carrucel/Carrucel'
import './ModuleHome.css'
import ComponentProduct from '../component-product/productCard'
import Products from '../../data/products.json'
import ProductLimpieza from '../../data/limpieza.json'
import Promociones from '../../data/promociones.json'
import PromocionesCardComponent from '../PromocionesCardComponent/PromocionesCardComponent'
import categorias from '../../data/categorias.json'
import CarrucelCategorias from '../CarrucelCategorias/CarrucelCategorias'
import CarrucelProductosComponent from '../CarrucelProductosComponent/CarrucelProductosComponent'

function ModuleHome() {
    const imgs=[
        "https://plazavea.vteximg.com.br/arquivos/Banner-Top-MP-D.png?v=637076373493930000",
        "https://i0.wp.com/infomarketing.pe/wp-content/uploads/2019/02/gloria-1200.jpg?resize=696%2C366&ssl=1",
        "https://assets.isu.pub/document-structure/221206223052-0c4b34abdcb4c969662416d74d7fbe79/v1/ae920798aa974275ad88f16f05397106.jpeg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLBmAOvAla2Tot1Dw6Mz3USp4LMXzIi0VzFQ&s",
        "https://www.businessempresarial.com.pe/wp-content/uploads/2022/11/DSC_9507-scaled.jpg"
    ]
    const urlBase="http://localhost:8080/productos";
      const[productos, setProductos]= useState([]);

      useEffect(()=>{
          cargarProductos();
      },[]);

      const cargarProductos = async () =>{
          const resultado = await axios.get(urlBase);
          console.log("Resultado de cargar productos");
          console.log(resultado.data);
          setProductos(resultado.data);
      }

      function seleccionarProductosAleatorios(arr, num) {
        // Clonamos el arreglo para no modificar el original
        const copiaProductos = [...arr];
        const seleccionados = [];
    
        // Mientras no hayamos seleccionado el número requerido de productos
        while (seleccionados.length < num && copiaProductos.length > 0) {
            // Selecciona un índice aleatorio
            const indiceAleatorio = Math.floor(Math.random() * copiaProductos.length);
            
            // Remueve el producto seleccionado del array y lo añade a seleccionados
            seleccionados.push(copiaProductos.splice(indiceAleatorio, 1)[0]);
        }
        
        return seleccionados;
    }

    const productosAleatorios = seleccionarProductosAleatorios(productos, 10);

  return (
    <div className='ModuleHomeContainer' >
        <Carrusel imagenes={imgs}/>
        <PromocionesCardComponent productos={productos}/>
        <h3>Categorias</h3>
        <CarrucelCategorias categorias={categorias}/>
        <h3>Quizá te interese:</h3>
        <CarrucelProductosComponent productos={productosAleatorios}/>
    </div>
  )
}

export default ModuleHome