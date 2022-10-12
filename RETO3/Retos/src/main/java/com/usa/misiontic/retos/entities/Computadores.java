package com.usa.misiontic.retos.entities;

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

    @ManyToMany
    
    private Categoria Categoria;


}
