package com.marcoswebbackend.marcoswebbackend.Services;

import java.util.List;

import com.marcoswebbackend.marcoswebbackend.Model.Producto;

public interface IProductoServicio {

    public List<Producto> listaProductos();

    public Producto buscarProductoId(Integer idProducto);

    public Producto guardarProducto(Producto producto);

    public void eliminarProducto(Producto producto);

    public List<Producto> listarActivos();
    
}

 
