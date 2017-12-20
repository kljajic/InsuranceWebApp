package ftn.sep.tim2.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import ftn.sep.tim2.model.Polisa;

@RestController
@RequestMapping("/polise")
public class PolisaController {
	
	@Autowired
	private DatabaseUri databaseUri;
	
	private RestTemplate template;
	
	public PolisaController(){
		template = new RestTemplate();
	}
	
	@RequestMapping(method=RequestMethod.POST, 
					produces = MediaType.APPLICATION_JSON_VALUE,
					consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<Polisa> novaPolisa(@RequestBody Polisa polisa){
		//Slanje polisa ka ExternalRequestHandler
		Polisa response = template.postForObject(databaseUri.getDatabaseUri() + "/polise", polisa, Polisa.class);
		return new ResponseEntity<Polisa>(response,HttpStatus.OK);
	}
}
