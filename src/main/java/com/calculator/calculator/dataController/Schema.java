package com.calculator.calculator.dataController;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Schema {    
    private String equation;
    private String value;
    public Schema() {}
    public Schema(String equation, String value) {        
        this.equation = equation;
        this.value = value;
    }
}