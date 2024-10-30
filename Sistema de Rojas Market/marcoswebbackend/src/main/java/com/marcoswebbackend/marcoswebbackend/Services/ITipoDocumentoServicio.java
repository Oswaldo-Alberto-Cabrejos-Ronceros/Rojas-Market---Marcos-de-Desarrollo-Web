package com.marcoswebbackend.marcoswebbackend.Services;

import java.util.List;

import com.marcoswebbackend.marcoswebbackend.Model.TipoDocumento;

public interface ITipoDocumentoServicio {

    public List<TipoDocumento> listarTipoDocumentos();

    public TipoDocumento buscarTipoDocumento(Integer idTipoDocumento);

    public TipoDocumento guardarTipoDocumento(TipoDocumento tipoDocumento);

    public void eliminarTipoDocumento(TipoDocumento tipoDocumento);

}
