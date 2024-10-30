import axios from "axios";
import { useEffect, useState } from "react";
import react from "react";
import BotonesCrud from "./BotonesCrud";

export default function ListadoProductos() {    

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

    return (

        <div className="container" style={{paddingBottom:"20px"}}> 
            
            <div className="container text-center" style={{ margin: "20px"}}>
                <h3>Listado de productos</h3>
            </div>
            
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    //Iteracion de productos
                    productos.map((producto, indice)=>(
                        <div className="card " style={{width: "18rem", marginLeft:"20px"}} key={indice}>
                            <img src={producto.rutaImagen} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{producto.nombre}</h5>
                                <p className="card-text">{producto.descripcion}</p>
                                <div className="btn btn-primary m-2">S/. {producto.precioVenta}</div>                                
                                <a href={`/editar/${producto.idProducto}`} className="btn btn-warning">Editar producto</a>
                            </div>
                        </div>
                    ))
                }
                    <div className="card " style={{width: "18rem", marginLeft:"20px"}}>
                        <BotonesCrud></BotonesCrud>     
                    </div>
            </div>
            </div>
        </div>
    )
}
