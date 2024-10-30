package com.marcoswebbackend.marcoswebbackend.Services;

import java.util.List;

import com.marcoswebbackend.marcoswebbackend.Model.Categoria;

public interface ICategoriasServicio {

    public List<Categoria> listaCategorias();

    public Categoria buscarCategoriaId(Integer idCategoria);

    public Categoria guardarCategorias(Categoria categoria);

    public void eliminarCategoria(Categoria categoria);
}
