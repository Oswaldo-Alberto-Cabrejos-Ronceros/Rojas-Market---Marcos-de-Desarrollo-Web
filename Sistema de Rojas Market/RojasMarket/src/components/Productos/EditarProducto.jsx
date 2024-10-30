import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

export default function EditarProductos() {

    const urlBase ="http://localhost:8080/productos";

    let navegacion = useNavigate();

    const {id}= useParams();

    const [producto, setProducto] = useState({
        nombre:"",
        categoriaId:"",
        descripcion:"",
        stock:"",
        estado:"",
        fechaVenc:"",
        precioCompra:"",
        precioVenta:"",
        rutaImagen:"",
    })

    useEffect(()=>{
        const cargarProducto= async()=>{
        const resultado = await axios.get(`${urlBase}/${id}`);
        setProducto(resultado.data);
    };
        cargarProducto();
        //cargarCategorias();
        console.log();
    },[id])

    

    //const [categorias, setCategorias] = useState([]);
    /*const cargarCategorias = async () =>{
        const urlCat = "http://localhost:8080/categorias";
        const categs = await axios.get(urlCat);
        setCategorias(categs.data);
    }*/

    const {nombre, descripcion, stock, fechaVenc, precioCompra, precioVenta, rutaImagen} = producto;
    const onInputChange = (e)=>{
        setProducto({...producto, [e.target.name]:e.target.value})
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`${urlBase}/${id}`, producto);
        navegacion('/productos');
    }

    /*const alEnviar = async (e) =>{
        e.preventDefault();
        await axios.put("http://localhost:8080/"+categoriaId+"/productos/"+id, producto);
        navegacion('/productos');
    }*/

  return (
    <div className="container">
        <div className="container text-center" style={{margin:"30px"}}>
            <h3>Editar Producto</h3>
        </div>
        <form onSubmit={(e)=>onSubmit(e)}>
            <div className="mb-1">
                <label htmlFor="nombre" className="form-label">Nombre del producto</label>
                <input type="text" className="form-control" id="nombre" name="nombre" required={true} value={nombre} onChange={(e)=>onInputChange(e)}/>
            </div>
            {/*
            <div className="mb-1">
                <label htmlFor="categorias" className="form-label">Categorias</label>
                <select name="categoriaId" id="categorias" className="form-control" value={categoriaId} onChange={(e)=>onInputChange(e)}>
                    <option value="">Selecione una categoria</option>
                    {
                        categorias.map((categoria, indice)=>(
                            <option key={indice} value={categoria.idCategoria}>{categoria.nombre}</option>
                        ))
                    }
                </select>
            </div>*/}
            <div className="mb-1">
                <label htmlFor="descripcion" className="form-label">Descripcion</label>
                <input type="text" className="form-control" id="descripcion" name="descripcion" value={descripcion} onChange={(e)=>onInputChange(e)}/>
            </div>
            
            <div className="mb-1">
                <label htmlFor="fechaVenc" className="form-label">Fecha de Vencimiento</label>
                <input type="date" className="form-control" id="fechaVenc" name="fechaVenc" value={fechaVenc} onChange={(e)=>onInputChange(e)}/>
            </div>
            <div className="mb-1">
                <label htmlFor="precioCompra" className="form-label">Precio de Compra</label>
                <input type="number" className="form-control" id="precioCompra" name="precioCompra" value={precioCompra} onChange={(e)=>onInputChange(e)}/>
            </div>
            <div className="mb-1">
                <label htmlFor="precioVenta" className="form-label">Precio de Venta</label>
                <input type="number" className="form-control" id="precioVenta" name="precioVenta" value={precioVenta} onChange={(e)=>onInputChange(e)}/>
            </div>
            <div className="mb-1">  
                <label htmlFor="stock" className="form-label">Stock</label>
                <input type="number" className="form-control" id="stock" name="stock" value={stock} onChange={(e)=>onInputChange(e)} required={true}/>
            </div>
            <div className="mb-3">
                <label htmlFor="rutaImagen" className="form-label">Imagen</label>
                <input type="text" className="form-control" id="rutaImagen" name="rutaImagen" value={rutaImagen} onChange={(e)=>onInputChange(e)}/>
            </div>
            <div className="text-center">
                <button type="submit" className="btn btn-warning me-3">Guardar</button>
                <a href="/productos" className="btn btn-danger me-3">Cancelar</a>
            </div>
        </form>
    </div>
  )
}
