package com.marcoswebbackend.marcoswebbackend.Model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TipoDocumento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer idTipoDocumento;
    String nombre;
    String acronico;
    String informacion;

    @OneToMany(mappedBy = "tipoDocumento", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<Usuario> usuarios;
}
