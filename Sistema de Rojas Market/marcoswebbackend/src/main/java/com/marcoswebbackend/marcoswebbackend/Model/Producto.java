package com.marcoswebbackend.marcoswebbackend.Model;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
//import lombok.ToString;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer idProducto;
    String nombre;
    String descripcion;
    int stock;
    double precioVenta;
    double precioCompra;
    boolean estado;
    Date fechaVenc;
    Date fechaCreacion;
    Date fechaModificacion;
    String rutaImagen;
    
    
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_categoria")
    Categoria categoria;
    
    public boolean getEstado(){
        return this.estado;
    }
}
