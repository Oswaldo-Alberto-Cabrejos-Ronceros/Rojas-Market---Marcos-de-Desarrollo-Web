package com.marcoswebbackend.marcoswebbackend.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.marcoswebbackend.marcoswebbackend.Exceptions.RecursoNoEncontradoException;
import com.marcoswebbackend.marcoswebbackend.Model.TipoDocumento;
import com.marcoswebbackend.marcoswebbackend.Repositorio.TipoDocumentoRepositorio;
@Service
public class TipoDocumentoServicio implements ITipoDocumentoServicio{

    @Autowired
    private TipoDocumentoRepositorio tipoDocumentoRepositorio;

    @Override
    public List<TipoDocumento> listarTipoDocumentos() {
        return tipoDocumentoRepositorio.findAll();
    }

    @Override
    public TipoDocumento buscarTipoDocumento(Integer idTipoDocumento) {
        return tipoDocumentoRepositorio.findById(idTipoDocumento).orElseThrow(()->new RecursoNoEncontradoException("Tipo de documento no encontrado"));
    }

    @Override
    public TipoDocumento guardarTipoDocumento(TipoDocumento tipoDocumento) {
        return tipoDocumentoRepositorio.save(tipoDocumento);
    }

    @Override
    public void eliminarTipoDocumento(TipoDocumento tipoDocumento) {
        tipoDocumentoRepositorio.delete(tipoDocumento);
    }

}
