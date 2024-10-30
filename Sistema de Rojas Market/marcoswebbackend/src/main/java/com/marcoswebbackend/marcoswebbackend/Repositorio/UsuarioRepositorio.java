package com.marcoswebbackend.marcoswebbackend.Repositorio;

import org.springframework.data.jpa.repository.JpaRepository;

import com.marcoswebbackend.marcoswebbackend.Model.Usuario;
import java.util.List;


public interface UsuarioRepositorio extends JpaRepository<Usuario,Integer> {

    public List<Usuario> findByIdUsuario(Integer idUsuario);

    public List<Usuario> findByNombres(String nombres);
    
}
