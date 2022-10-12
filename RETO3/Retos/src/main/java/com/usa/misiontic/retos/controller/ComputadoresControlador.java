package com.usa.misiontic.retos.controller;


import com.usa.misiontic.retos.entities.Computadores;
import com.usa.misiontic.retos.servicio.ComputadoresServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/Computer")
public class ComputadoresControlador {

    @Autowired
    private ComputadoresServicio ComputadoresServicio;

    @GetMapping("/all")
    public List<Computadores> getAll(){
        return ComputadoresServicio.getAll();
    }

    @GetMapping("/save")
    public Computadores save(@RequestBody Computadores p){
        return ComputadoresServicio.save(p);
    }
}
