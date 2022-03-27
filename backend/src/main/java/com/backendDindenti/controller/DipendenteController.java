package com.backendDindenti.controller;

import com.backendDindenti.model.Dipendente;
import com.backendDindenti.repository.DipendenteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class DipendenteController {
    @Autowired
    private DipendenteRepository dipendenteRepository;

     @GetMapping("/")
    public List<Dipendente> getAllDipendenti(){
        return dipendenteRepository.findAll();
    };
}
