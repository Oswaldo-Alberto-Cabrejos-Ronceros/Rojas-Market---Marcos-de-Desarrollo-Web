package com.marcoswebbackend.marcoswebbackend.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.marcoswebbackend.marcoswebbackend.Model.Usuario;
import com.marcoswebbackend.marcoswebbackend.Exceptions.RecursoNoEncontradoException;
import com.marcoswebbackend.marcoswebbackend.Model.TipoDocumento;
import com.marcoswebbackend.marcoswebbackend.Repositorio.TipoDocumentoRepositorio;
import com.marcoswebbackend.marcoswebbackend.Repositorio.UsuarioRepositorio;

@Service
public class UsuarioServicio implements IUsuarioServicio{

    @Autowired
    private UsuarioRepositorio usuarioRepositorio;

    @Autowired
    private TipoDocumentoRepositorio tipoDocumentoRepositorio;

    @Override
    public List<Usuario> listarUsuarios() {
        return usuarioRepositorio.findAll();
    }

    @Override
    public Usuario buscarUsuarioId(Integer idUsuario) {
        Usuario usuario=usuarioRepositorio.findById(idUsuario).orElse(null);
        return usuario;
    }

    @Override
    public Usuario guardarUsuario(Usuario usuario) {
        TipoDocumento tipoDocumento = tipoDocumentoRepositorio.findById(usuario.getTipoDocumento().getIdTipoDocumento()).orElseThrow(()->new RecursoNoEncontradoException("Tipo de Documento No encontrado"));
        usuario.setTipoDocumento(tipoDocumento);
        return usuarioRepositorio.save(usuario);
    }

    @Override
    public void eliminarUsuario(Usuario usuario) {
        usuarioRepositorio.delete(usuario);
    }
    
}
