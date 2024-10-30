package com.marcoswebbackend.marcoswebbackend.Controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//import com.marcoswebbackend.marcoswebbackend.Exceptions.RecursoNoEncontradoException;
import com.marcoswebbackend.marcoswebbackend.Model.Categoria;
import com.marcoswebbackend.marcoswebbackend.Model.Producto;
import com.marcoswebbackend.marcoswebbackend.Services.CategoriasServicio;
import com.marcoswebbackend.marcoswebbackend.Services.ProductoServicio;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/")
@CrossOrigin(value ="http://localhost:5173")
public class CategoriasControlador {

    private static final Logger logger = LoggerFactory.getLogger(CategoriasControlador.class);

    @Autowired
    private CategoriasServicio categoriasServicio;

    @Autowired
    private ProductoServicio productoServicio;

    @GetMapping("/categorias")
    public List<Categoria> obtenerCategorias() {    
        var categorias = categoriasServicio.listaCategorias();
        categorias.forEach((categoria ->logger.info(categoria.toString())));
        return categorias;
    }
    

    @PostMapping("/categorias")
    public Categoria agregarCategorias(@RequestBody Categoria categorias) {
        logger.info("Categoria a agregar: "+categorias);
        return categoriasServicio.crearCategoria(categorias);
    }

    @PostMapping("/{categoriaId}/productos")
    public Producto agregarProducto(@PathVariable Integer categoriaId ,@RequestBody Producto producto) {
        return categoriasServicio.agregarProductoACategoria(categoriaId, producto);
    }

    @GetMapping("/{categoriaId}/productos")
    public List<Producto> obtenerProductosPorCategoria(@PathVariable Integer categoriaId) {
        return categoriasServicio.obtenerProductosPorCat(categoriaId);
    }

    @GetMapping("/categorias/{id}")
    public Categoria obtenerCategoriaId(@PathVariable Integer id){
        return categoriasServicio.buscarCategoriaId(id);
    }

    @GetMapping("/{categoriaNombre}")
    public List<Producto> obtenerProductosPorCatNom(@PathVariable String categoriaNombre){
        return categoriasServicio.obtenerProductosPorCatNombre(categoriaNombre);
    }

    @PutMapping("/{categoriaId}/productos/{id}")
    public ResponseEntity<Producto> actualizarProducto(@PathVariable Integer categoriaId, @PathVariable Integer id, @RequestBody Producto productoRecibido){
        Producto producto  = productoServicio.buscarProductoId(id);
        
        producto.setNombre(productoRecibido.getNombre());
        producto.setDescripcion(productoRecibido.getDescripcion());
        producto.setStock(productoRecibido.getStock());
        producto.setPrecioVenta(productoRecibido.getPrecioVenta());
        producto.setPrecioCompra(productoRecibido.getPrecioCompra());
        producto.setEstado(productoRecibido.getEstado());
        producto.setFechaVenc(productoRecibido.getFechaVenc());
        producto.setFechaCreacion(productoRecibido.getFechaCreacion());
        producto.setFechaModificacion(productoRecibido.getFechaModificacion());
        productoServicio.guardarProducto(producto);
        return ResponseEntity.ok(producto);
    }
    
    
    




}
