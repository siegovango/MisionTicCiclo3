package com.usa.misiontic.retos.servicio;

import com.usa.misiontic.retos.entities.Computadores;
import com.usa.misiontic.retos.repositorio.ComputadoresReposotorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ComputadoresServicio  {

    @Autowired
    private ComputadoresReposotorio ComputadoresRepositorio;

    public List<Computadores> getAll(){
        return ComputadoresRepositorio.getAll();
    }

    public Optional<Computadores> getComputadores(int id){
        return ComputadoresRepositorio.getComputadores(id);
    }

    public Computadores save(Computadores p){
        if(p.getId()==null){
            return ComputadoresRepositorio.save(p);
        }else{
            Optional<Computadores> e = ComputadoresRepositorio.getComputadores(p.getId());
            if (e.isPresent()){
                return p;
            }else{
                return ComputadoresRepositorio.save(p);
            }
        }

    }

    public Computadores update(Computadores p){
        if(p.getId()!=null){
            Optional<Computadores> q = ComputadoresRepositorio.getComputadores(p.getId());
            if(q.isPresent()){
                if(p.getMarca()!=null){
                    q.get().setMarca(p.getMarca());
                }
                if(p.getNombre()!=null){
                    q.get().setNombre(p.getNombre());
                }
                if(p.getAno()!=null){
                    q.get().setAno(p.getAno());
                }
                if(p.getDescripcion()!=null){
                    q.get().setDescripcion(p.getDescripcion());
                }
                if(p.getCategoria()!=null){
                    q.get().setCategoria(p.getCategoria());
                }
                ComputadoresRepositorio.save(q.get());
                return q.get();
            }else{
                return p;
            }
        }else{
            return p;
        }
    }

    public boolean delete(int id){
        boolean flag = false;
        Optional<Computadores>p=ComputadoresRepositorio.getComputadores(id);
        if(p.isPresent()){
            ComputadoresRepositorio.delete(p.get());
            flag =true;
        }

        return flag;
    }
}
