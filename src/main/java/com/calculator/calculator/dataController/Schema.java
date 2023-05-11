package com.calculator.calculator.dataController;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Schema {    
    private Long id;
    private String equation;
    private String value;
    public Schema() {}
    public Schema(Long id, String equation, String value) {        
        this.id = id;
        this.equation = equation;
        this.value = value;
    }
}