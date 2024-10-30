package com.marcoswebbackend.marcoswebbackend.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//import com.marcoswebbackend.marcoswebbackend.Exceptions.RecursoNoEncontradoException;
import com.marcoswebbackend.marcoswebbackend.Model.Categoria;
import com.marcoswebbackend.marcoswebbackend.Model.Producto;
import com.marcoswebbackend.marcoswebbackend.Repositorio.CategoriasRepositorio;
import com.marcoswebbackend.marcoswebbackend.Repositorio.ProductoRepositorio;

@Service
public class CategoriasServicio {

    @Autowired
    private CategoriasRepositorio categoriasRepositorio;

    @Autowired
    private ProductoRepositorio productoRepositorio;

    public Categoria crearCategoria (Categoria categorias){
        return categoriasRepositorio.save(categorias);
    }

    public List<Categoria> listaCategorias(){
        return categoriasRepositorio.findAll();
    }

    public Categoria buscarCategoriaId(Integer categoriaId){
        Categoria categoria = categoriasRepositorio.findById(categoriaId).orElseThrow(()->new RuntimeException("Categoria no encontrada"));
        return categoria;
    }

    public Producto agregarProductoACategoria(Integer categoriaId, Producto producto){
        Categoria categorias = categoriasRepositorio.findById(categoriaId).orElseThrow(()->new RuntimeException("Categoria No encontrada"));
        producto.setCategoria(categorias);
        return productoRepositorio.save(producto);
    }

    public List<Producto> obtenerProductosPorCat(Integer categoriaId){
        Categoria categorias = categoriasRepositorio.findById(categoriaId).orElseThrow(()->new RuntimeException("Categoria no encontrada"));
        return categorias.getProductos();
    }

    public List<Producto> obtenerProductosPorCatNombre(String nombreCategoria){
        Categoria categorias = categoriasRepositorio.findByNombre(nombreCategoria);
        return categorias.getProductos();
    }

    /*
    public Producto actualizarProducto(Integer categoriaId, Integer productoId, Producto productoActualizado){
        Categoria categoria = categoriasRepositorio.findById(productoId).orElseThrow(()-> new RecursoNoEncontradoException("Categoria No encontrada"));
        Producto producto = productoRepositorio.findById(productoId).orElseThrow(()-> new RecursoNoEncontradoException("Producto no encontrado"));

        if (!producto.getCategoria().getIdCategoria().equals(categoriaId)) {
            throw new IllegalArgumentException("El producto no pertenece a la categoria seleccionada");
        }

        producto.setNombre(productoActualizado.getNombre());
        producto.setDescripcion(productoActualizado.getDescripcion());
        producto.setPrecioCompra(productoActualizado.getPrecioCompra());
        producto.setPrecioVenta(productoActualizado.getPrecioVenta());
        producto.setFechaModificacion(productoActualizado.getFechaModificacion());
        producto.setFechaCreacion(productoActualizado.getFechaCreacion());
        producto.setFechaVenc(productoActualizado.getFechaVenc());
        producto.setEstado(productoActualizado.getEstado());
        producto.setStock(productoActualizado.getStock());
        producto.setRutaImagen(productoActualizado.getRutaImagen());

        return productoRepositorio.save(producto);
    }*/

}
