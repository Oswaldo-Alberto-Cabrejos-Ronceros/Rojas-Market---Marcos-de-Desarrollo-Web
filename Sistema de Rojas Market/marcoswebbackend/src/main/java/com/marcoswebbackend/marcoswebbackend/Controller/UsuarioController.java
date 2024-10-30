package com.marcoswebbackend.marcoswebbackend.Controller;

import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.marcoswebbackend.marcoswebbackend.Exceptions.RecursoNoEncontradoException;
import com.marcoswebbackend.marcoswebbackend.Model.TipoDocumento;
import com.marcoswebbackend.marcoswebbackend.Model.Usuario;
import com.marcoswebbackend.marcoswebbackend.Model.UsuarioDTO;
import com.marcoswebbackend.marcoswebbackend.Services.ITipoDocumentoServicio;
import com.marcoswebbackend.marcoswebbackend.Services.IUsuarioServicio;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin(value = "http://localhost:5173")
public class UsuarioController {
    private static final Logger logger = LoggerFactory.getLogger(UsuarioController.class);

    @Autowired
    private IUsuarioServicio usuarioServicio;

    @Autowired
    private ITipoDocumentoServicio tipoDocumentoServicio;

    @GetMapping("/")
    public List<Usuario> obtenerUsuarios(){
        var usuarios = usuarioServicio.listarUsuarios();
        usuarios.forEach((usuario -> logger.info(usuario.toString())));
        return usuarios;
    }

    @PostMapping("/")
    public Usuario agregarUsuario(@RequestBody UsuarioDTO usuarioDTO){
        TipoDocumento tipoDocumento = tipoDocumentoServicio.buscarTipoDocumento(usuarioDTO.getIdTipoDocumento());
        Usuario usuario = new Usuario();
        logger.info("Usuario a agregar: "+usuario);
        usuario.setTipoDocumento(tipoDocumento);
        usuario.setNombres(usuarioDTO.getNombres());
        usuario.setApellidoMaterno(usuarioDTO.getApellidoMaterno());
        usuario.setApellidoPaterno(usuarioDTO.getApellidoPaterno());
        usuario.setCorreo(usuarioDTO.getCorreo());
        usuario.setContrasena(usuarioDTO.getContrasena());
        usuario.setDireccion(usuarioDTO.getDireccion());
        usuario.setTelefono(usuarioDTO.getTelefono());
        usuario.setEstado(usuarioDTO.getEstado());
        usuario.setFechaNacimiento(usuarioDTO.getFechaNacimiento());
        usuario.setFechaCreacion(usuarioDTO.getFechaCreacion());
        usuario.setFechaModificacion(usuarioDTO.getFechaModificacion());
        usuario.setRol(usuarioDTO.getRol());
        usuario.setValDoc(usuarioDTO.getValDoc());
        return usuarioServicio.guardarUsuario(usuario);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Usuario> obtenerUsuarioId(@PathVariable Integer id){
        Usuario usuario = usuarioServicio.buscarUsuarioId(id);
        if (usuario==null) {
            throw new RecursoNoEncontradoException("El usuario no ha sido encontrado");
        }
        return ResponseEntity.ok(usuario);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Usuario> actualizarUsuario(@PathVariable Integer id, @RequestBody Usuario usuarioSeleccionado){
        Usuario usuario  = usuarioServicio.buscarUsuarioId(id);
        if (usuario==null) {
            throw new RecursoNoEncontradoException("El id recibido no existe: " +id);
        }
        usuario.setNombres(usuarioSeleccionado.getNombres());
        usuario.setApellidoPaterno(usuarioSeleccionado.getApellidoPaterno());
        usuario.setApellidoMaterno(usuarioSeleccionado.getApellidoMaterno());
        usuario.setCorreo(usuarioSeleccionado.getCorreo());
        usuario.setContrasena(usuarioSeleccionado.getContrasena());
        usuario.setTelefono(usuarioSeleccionado.getTelefono());
        usuario.setDireccion(usuarioSeleccionado.getDireccion());
        usuario.setEstado(usuarioSeleccionado.getEstado());
        usuario.setFechaNacimiento(usuarioSeleccionado.getFechaNacimiento());
        usuario.setFechaCreacion(usuarioSeleccionado.getFechaCreacion());
        usuario.setFechaModificacion(usuarioSeleccionado.getFechaModificacion());
        usuario.setRol(usuarioSeleccionado.getRol());
        usuario.setValDoc(usuarioSeleccionado.getValDoc());
        usuario.setTipoDocumento(usuarioSeleccionado.getTipoDocumento());
        usuarioServicio.guardarUsuario(usuario);
        return ResponseEntity.ok(usuario);
    }

    
}
