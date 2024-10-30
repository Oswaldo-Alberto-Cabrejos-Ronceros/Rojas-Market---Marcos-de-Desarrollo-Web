package com.marcoswebbackend.marcoswebbackend.Model;

import java.util.Date;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;   
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString

public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="id_tipo_documento")
    TipoDocumento tipoDocumento;

    public boolean getEstado(){
        return this.estado;
    }
}
