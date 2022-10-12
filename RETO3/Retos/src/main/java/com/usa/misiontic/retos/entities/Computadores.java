package com.usa.misiontic.retos.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;


@Entity
@Table(name="Computadores")
public class Computadores implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String marca;
    private String nombre;
    private Integer ano;
    private String descripcion;
    private Integer categoria;

    @ManyToOne
    @JoinColumn(name= "CategoriaId")
    @JsonIgnoreProperties("Computadores")
    private Categoria Categoria;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Integer getAno() {
        return ano;
    }

    public void setAno(Integer ano) {
        this.ano = ano;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Integer getCategoria() {
        return categoria;
    }

    public void setCategoria(com.usa.misiontic.retos.entities.Categoria categoria) {
        Categoria = categoria;
    }

    public void setCategoria(Integer categoria) {
        this.categoria = categoria;
    }
}
