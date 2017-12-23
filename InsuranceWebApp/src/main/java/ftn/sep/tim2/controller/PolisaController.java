package ftn.sep.tim2.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import ftn.sep.tim2.config.DatabaseUri;
import ftn.sep.tim2.model.Polisa;

@CrossOrigin
@RestController
@RequestMapping("/polise")
public class PolisaController {
	
	private final DatabaseUri databaseUri;
	private final RestTemplate restTemplate;
	
	@Autowired
	public PolisaController(RestTemplate restTemplate, DatabaseUri databaseUri) {
		this.restTemplate = restTemplate;
		this.databaseUri = databaseUri;
	}
	
	@PostMapping()
	@ResponseBody
	public ResponseEntity<Polisa> novaPolisa(@RequestBody Polisa polisa){
		//Slanje polisa ka ExternalRequestHandler
		Polisa response = restTemplate.postForObject(databaseUri.getDatabaseUri() + "/polise", polisa, Polisa.class);
		return new ResponseEntity<Polisa>(response,HttpStatus.OK);
	}
}