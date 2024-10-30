import React from 'react'
import axios from 'axios';
import { useEffect, useState } from "react"
import './InputBusquedaBarNav.css'
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

function InputBusquedaBarNav() {

  const [categorias, setCategorias] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
  const navigate = useNavigate();

  useEffect(()=>{
    cargarCategorias();
  },[])

  const cargarCategorias = async () =>{
    const urlCat = "http://localhost:8080/categorias";
    const categs = await axios.get(urlCat);
    setCategorias(categs.data);
  }

  const handleCategoriaChange = (e) => {
    setCategoriaSeleccionada(e.target.value);
  };

  const handleBuscar = () => {
    if (categoriaSeleccionada) {
      navigate(`/productos/categoria/${categoriaSeleccionada}`);
      console.log(categoriaSeleccionada);
    } else{
      alert("Seleccione una categoria o ingrese un producto");
    }
  };

  return (
    <div className='InputBusquedaBarNavContainer'>
        <select name="categoriaId" id="categorias" className="form-control" value={categoriaSeleccionada} onChange={handleCategoriaChange}>
          <option value="">Categorias</option>
          {
              categorias.map((categoria, indice)=>(
                  <option key={indice} value={categoria.idCategoria}>{categoria.nombre}</option>
              ))
          }
        </select>
        <input  type="text" name="Producto" id="Producto" placeholder='Busque un producto'/>
        
      <IoIosSearch size={24} color="black" style={{cursor:"pointer"}} onClick={handleBuscar}/>
    </div>
  )
}

export default InputBusquedaBarNav