package com.usa.misiontic.retos.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name="Categoria")
public class Categoria  implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer Id;
    private  String nombre;
    private  String Descripcion;

    @OneToMany (cascade = {CascadeType.PERSIST},mappedBy = "Categoria")
    @JsonIgnoreProperties("Categoria")
    private List<Computadores> Computadores;

    public Integer getId() {
        return Id;
    }

    public void setId(Integer id) {
        Id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return Descripcion;
    }

    public void setDescripcion(String descripcion) {
        Descripcion = descripcion;
    }

    public List<com.usa.misiontic.retos.entities.Computadores> getComputadores() {
        return Computadores;
    }

    public void setComputadores(List<com.usa.misiontic.retos.entities.Computadores> computadores) {
        Computadores = computadores;
    }
}
