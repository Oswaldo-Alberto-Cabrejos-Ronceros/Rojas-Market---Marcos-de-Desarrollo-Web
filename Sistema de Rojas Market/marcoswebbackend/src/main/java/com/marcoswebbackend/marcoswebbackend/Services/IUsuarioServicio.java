package com.marcoswebbackend.marcoswebbackend.Services;

import java.util.List;

import com.marcoswebbackend.marcoswebbackend.Model.Usuario;

public interface IUsuarioServicio {

    public List<Usuario> listarUsuarios();

    public Usuario buscarUsuarioId(Integer idUsuario);

    public Usuario guardarUsuario(Usuario usuario);

    public void eliminarUsuario(Usuario usuario);


    
}
