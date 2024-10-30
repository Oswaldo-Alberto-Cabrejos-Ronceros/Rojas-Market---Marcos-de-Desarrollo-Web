package com.marcoswebbackend.marcoswebbackend.Controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.marcoswebbackend.marcoswebbackend.Exceptions.RecursoNoEncontradoException;
import com.marcoswebbackend.marcoswebbackend.Model.Producto;
import com.marcoswebbackend.marcoswebbackend.Services.IProductoServicio;
import java.util.List;

@RestController
@RequestMapping("/")
@CrossOrigin(value = "http://localhost:5173")
public class ProductoControlador {
    private static final Logger logger = LoggerFactory.getLogger(ProductoControlador.class);

    @Autowired
    private IProductoServicio productoServicio;

    @GetMapping("/productos")
    public List<Producto> obtenerProductos(){
        var productos = productoServicio.listaProductos();
        productos.forEach((producto -> logger.info(producto.toString())));
        return productos; 
    }

    @GetMapping("/productosactivos")
    public List<Producto> obtenerProductosActivos(){
        var productos = productoServicio.listarActivos();
        productos.forEach((producto -> logger.info(producto.toString())));
        return productos;
    }

    @PostMapping("/productos")
    public Producto agregarProducto(@RequestBody Producto producto){
        logger.info("Producto a agregar: "+producto);
        return productoServicio.guardarProducto(producto);

    }

    @GetMapping("/productos/{id}")
    public ResponseEntity<Producto> obtenerProductoId(@PathVariable Integer id){
        Producto producto = productoServicio.buscarProductoId(id);
        if (producto==null) {
            throw new RecursoNoEncontradoException("No se encontro el producto con id: "+id);
        }
        return ResponseEntity.ok(producto);
    }
    
    @PutMapping("/productos/{id}")
    public ResponseEntity<Producto> actualizarProducto(@PathVariable Integer id, @RequestBody Producto productoRecibido){
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
