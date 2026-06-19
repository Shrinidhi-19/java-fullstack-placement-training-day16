package com.example.mutlitable;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class MultiController {
    private MultiService service;
    public MultiController(MultiService service){
        this.service = service;
    }
    @GetMapping("/table/{a}")
    public String table(@PathVariable int a){
        return service.gettable(a);
    }
}
