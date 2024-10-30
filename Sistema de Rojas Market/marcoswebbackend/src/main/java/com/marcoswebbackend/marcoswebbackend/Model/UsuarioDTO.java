package com.marcoswebbackend.marcoswebbackend.Model;

import java.util.Date;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UsuarioDTO {
    Integer idUsuario;
    String nombres;
    String apellidoPaterno;
    String apellidoMaterno;
    String correo;
    String contrasena;
    String telefono;
    String direccion;
    boolean estado;
    Date fechaNacimiento;
    Date fechaCreacion;
    Date fechaModificacion;
    String rol;
    String valDoc;
    Integer idTipoDocumento;

    public UsuarioDTO(Usuario usuario){
        this.idUsuario = usuario.getIdUsuario();
        this.nombres = usuario.getNombres();
        this.apellidoPaterno = usuario.getApellidoPaterno();
        this.apellidoMaterno = usuario.getApellidoMaterno();
        this.correo = usuario.getCorreo();
        this.contrasena = usuario.getContrasena();
        this.telefono = usuario.getTelefono();
        this.direccion = usuario.getDireccion();
        this.estado = usuario.getEstado();
        this.fechaNacimiento = usuario.getFechaNacimiento();
        this.fechaCreacion = usuario.getFechaCreacion();
        this.fechaModificacion = usuario.getFechaModificacion();
        this.rol = usuario.getRol();
        this.valDoc = usuario.getValDoc();
        this.idTipoDocumento = usuario.getTipoDocumento().getIdTipoDocumento();
    }

    public boolean getEstado(){
        return this.estado;
    }
    


}
