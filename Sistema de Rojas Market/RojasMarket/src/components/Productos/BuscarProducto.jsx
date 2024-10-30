import React from 'react';
import axios from 'axios';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';


export default function BuscarProducto() {

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


  return (
    <div>
      <h2>Productos de la categoría {categoria.nombre}</h2>
    <h4>Descripcion:</h4>
      {
        <p>{categoria.descripcion}</p>
      }
      <h4>Productos:</h4>
      <ul>
        {productos.map((producto, indice) => (
          <li key={indice}>{producto.nombre}</li>
        ))}
      </ul>
    </div>
  )
}
