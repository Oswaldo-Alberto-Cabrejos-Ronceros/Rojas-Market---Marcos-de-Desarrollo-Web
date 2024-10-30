package com.marcoswebbackend.marcoswebbackend.Controller;

import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.marcoswebbackend.marcoswebbackend.Model.TipoDocumento;
import com.marcoswebbackend.marcoswebbackend.Services.TipoDocumentoServicio;

@RestController
@RequestMapping("/tipo-documentos")
@CrossOrigin(value = "http://localhost:5173")
public class TipoDocumentoContolador {
    
    private static final Logger logger = LoggerFactory.getLogger(TipoDocumentoContolador.class);

    @Autowired
    private TipoDocumentoServicio tipoDocumentoServicio;

    @GetMapping("/")
    public List<TipoDocumento> obtenerTipoDocumentos(){
        var tipoDocumentos = tipoDocumentoServicio.listarTipoDocumentos();
        tipoDocumentos.forEach((tipoDoc -> logger.info(tipoDoc.toString())));
        return tipoDocumentos;
    }

    @PostMapping("/")
    public TipoDocumento agregarTipoDocumento(@RequestBody TipoDocumento tipoDocumento){
        logger.info("Producto a agregar: "+tipoDocumento);
        return tipoDocumentoServicio.guardarTipoDocumento(tipoDocumento);
    }

}
