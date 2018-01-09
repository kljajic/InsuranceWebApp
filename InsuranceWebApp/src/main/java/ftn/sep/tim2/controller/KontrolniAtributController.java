package ftn.sep.tim2.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import ftn.sep.tim2.config.DatabaseUri;
import ftn.sep.tim2.model.KontrolniAtribut;

@RestController
@RequestMapping("/api/kontrolniAtributi")
public class KontrolniAtributController {

	private final RestTemplate restTemplate;
	private final DatabaseUri databaseUri;
	
	@Autowired
	public KontrolniAtributController(RestTemplate restTemplate, DatabaseUri databaseUri) {
		this.restTemplate = restTemplate;
		this.databaseUri = databaseUri;
	}
	
	@GetMapping("/zaKontekstAtributa/{kontekstAtributaId}")
	@ResponseBody
	public KontrolniAtribut getAtributiZaKontekst(@PathVariable("kontekstAtributaId")Long kontekstAtributaId) {
		return restTemplate.getForObject(databaseUri.getDatabaseUri() + "/kontrolniAtributi/zaKontekstAtributa/" + kontekstAtributaId, KontrolniAtribut.class);
	}
	
}
