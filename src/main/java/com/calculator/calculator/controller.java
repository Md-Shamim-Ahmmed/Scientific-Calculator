package com.calculator.calculator;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.calculator.calculator.dataController.Schema;
import com.calculator.calculator.dataController.FirebaseService;

@RestController
public class controller {
	@Autowired
    FirebaseService schemaService;

	@GetMapping("/")
	public ModelAndView index() {
		return new ModelAndView("index.html");
	}

    @PostMapping("/addhistory")
    public ResponseEntity<?> addHistory(@RequestBody Map<String, String> input) throws Exception{
        String equation = input.get("equation").toString();
        String value = input.get("value").toString();        
        Schema schema = new Schema(equation, value);
        schemaService.addHistoryDetails(schema);
        return ResponseEntity.ok("history added successful :/)");
    }
    @GetMapping("/gethistory")
    public List<Schema> getHistory() throws Exception {
        return schemaService.getHistoryDetails();
    }
}