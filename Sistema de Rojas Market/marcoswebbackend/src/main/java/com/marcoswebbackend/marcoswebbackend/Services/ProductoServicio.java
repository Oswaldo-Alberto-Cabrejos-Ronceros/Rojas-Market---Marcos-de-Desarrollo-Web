package com.marcoswebbackend.marcoswebbackend.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.marcoswebbackend.marcoswebbackend.Model.Producto;
import com.marcoswebbackend.marcoswebbackend.Repositorio.ProductoRepositorio;

@Service
public class ProductoServicio implements IProductoServicio{

    @Autowired
    private ProductoRepositorio productoRepositorio;

    @Override
    public List<Producto> listaProductos() {
        return productoRepositorio.findAll();
    }

    @Override
    public Producto buscarProductoId(Integer idProducto) {
        Producto producto=productoRepositorio.findById(idProducto).orElse(null);
        return producto;
    }

    @Override
    public Producto guardarProducto(Producto producto) {
        return productoRepositorio.save(producto);
    }

    @Override
    public void eliminarProducto(Producto producto) {
        productoRepositorio.delete(producto); 
    }

    public List<Producto> listarActivos(){
        return productoRepositorio.findByEstado(true);
    }

}
