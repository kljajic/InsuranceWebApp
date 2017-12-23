package ftn.sep.tim2.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import ftn.sep.tim2.config.DatabaseUri;
import ftn.sep.tim2.model.PredefinisanaVrednost;

@RestController
@RequestMapping("/api/predefinisaneVrednosti")
public class PredefinisanaVrednostController {
	
	@Autowired
	private DatabaseUri databaseUri;
	
	@Autowired
	private RestTemplate restTemplate;
	
	@GetMapping
	@SuppressWarnings("unchecked")
	@ResponseBody
	public List<PredefinisanaVrednost> getPredefinisanaVrednost(){
		return restTemplate.getForObject(databaseUri.getDatabaseUri() + "/predefinisaneVrednosti", List.class);
	}
	
	@GetMapping("/zaTipAtributa/{tipAtributaId}")
	@SuppressWarnings("unchecked")
	@ResponseBody
	public List<PredefinisanaVrednost> getPredefinisanaVrednostiZaTipAtributa(@PathVariable ("tipAtributaId") Long tipAtributaId){
		return restTemplate.getForObject(databaseUri.getDatabaseUri() + "/predefinisaneVrednosti/zaTipAtributa/" + tipAtributaId, List.class);
	}

}
