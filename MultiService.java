package com.example.mutlitable;

import org.springframework.stereotype.Service;

@Service
public class MultiService {

    public String gettable(int a) {
        String res = "";
        for (int i = 1; i < 11; i++){
            res += a + " * " + i + " = " + (a*i) + "\n";
        }
        return res;
    }

}
