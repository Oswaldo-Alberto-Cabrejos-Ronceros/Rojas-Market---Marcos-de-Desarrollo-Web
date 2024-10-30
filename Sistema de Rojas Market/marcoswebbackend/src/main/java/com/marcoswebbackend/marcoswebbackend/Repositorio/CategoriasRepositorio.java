package com.marcoswebbackend.marcoswebbackend.Repositorio;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.marcoswebbackend.marcoswebbackend.Model.Categoria;

public interface CategoriasRepositorio extends JpaRepository<Categoria, Integer>{

    public Categoria findByNombre(String nombre);
}
