package com.marcoswebbackend.marcoswebbackend.Repositorio;

import org.springframework.data.jpa.repository.JpaRepository;

import com.marcoswebbackend.marcoswebbackend.Model.Producto;
import java.util.List;

public interface ProductoRepositorio extends JpaRepository<Producto, Integer> {

    List<Producto> findByEstado(boolean estado);

}
