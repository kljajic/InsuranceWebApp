package ftn.sep.tim2.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import ftn.sep.tim2.config.DatabaseUri;
import ftn.sep.tim2.model.Osiguranje;
import ftn.sep.tim2.model.VrednostAtributaOsiguranja;

@RestController
@RequestMapping("/api/osiguranja")
public class OsiguranjeController {

	private final RestTemplate restTemplate;
	private final DatabaseUri databaseUri;
	
	@Autowired
	public OsiguranjeController(RestTemplate restTemplate, DatabaseUri databaseUri) {
		this.restTemplate = restTemplate;
		this.databaseUri = databaseUri;
	}
	
	@PostMapping("/{tipOsiguranjaId}/{tipUplate}")
	@ResponseBody
	public String createOsiguranje(@RequestBody Osiguranje osiguranje, @PathVariable("tipOsiguranjaId")Long tipOsiguranjaId, @PathVariable("tipUplate")String tipUplate) {
		return restTemplate.postForObject(databaseUri.getDatabaseUri() + "/osiguranja/" + tipOsiguranjaId + "/" + tipUplate, osiguranje, String.class);
	}
	
	@PostMapping()
	@ResponseBody
	public Double getCena(@RequestBody List<VrednostAtributaOsiguranja> listaVrednosti) {
		return restTemplate.postForObject(databaseUri.getDatabaseUri() + "/osiguranja/", listaVrednosti, Double.class);
	}
	
}
