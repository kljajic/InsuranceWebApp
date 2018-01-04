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
import ftn.sep.tim2.model.OsiguravajucaKuca;

@RestController
@RequestMapping("/api/kontekstiAtributa")
public class KontekstAtributaController {

	private final DatabaseUri databaseUri;
	private final RestTemplate restTemplate;
	
	@Autowired
	public KontekstAtributaController(DatabaseUri databaseUri, RestTemplate restTemplate) {
		this.databaseUri = databaseUri;
		this.restTemplate = restTemplate;
	}
	
	@SuppressWarnings("unchecked")
	@GetMapping("/zaTipOsiguranja/{tipOsiguranjaId}")
	@ResponseBody
	public List<OsiguravajucaKuca> getOsiguravajuceKuce(@PathVariable("tipOsiguranjaId") Long tipOsiguranjaId) {
		return restTemplate.getForObject(databaseUri.getDatabaseUri() + "/kontekstiAtributa/zaTipOsiguranja/" + tipOsiguranjaId, List.class);
	}
	
}
